import {lockSwipeSvg, circles} from '../loadSvg';

// базовый класс для всех замочных механизмов
class LockBase {
    constructor() {
        this.isLocked = true;
        this.node = document.createElement('div');
        this.node.classList.add('lock');
        this.node.oncontextmenu = (e) => {
            e.preventDefault();
            e.stopPropagation();
            return false;
        };
        this.node.setAttribute('touch-action', 'none');
    }
}

// здесь живут засовы
export class LockSwipe extends LockBase {
    constructor(direction, callback) {
        super();
        const swipe = this.swipe.bind(this);
        this.direction = direction;
        this.offsetX = 0;
        this.node.classList.add('lock-swipe', this.direction === 1 ? 'lock-swipe__left' : 'lock-swipe__right');
        this.node.innerHTML = lockSwipeSvg;
        this.transforms = 'translateY(' + (direction ? '100%' : '-100%') + ')';
        this.node.style.transform = this.transforms;

        this.node.addEventListener('pointerdown', (e) => {
            this.touchX = e.pageX;
            this.node.classList.add('lock-swipe__touched');
            this.node.addEventListener('pointermove', swipe);
            this.node.setPointerCapture(e.pointerId);
        });

        this.node.addEventListener('pointerup', (e) => {
            this.node.removeEventListener('pointermove', swipe);
            this.node.classList.remove('lock-swipe__touched');
            this.node.releasePointerCapture(e.pointerId);
            this.release();
        });

        this.onUnlockCallback = callback;
    }

    swipe(e) {
        if (this.direction ? (e.pageX - this.touchX) < 0 : (e.pageX - this.touchX) >= 0) {
            this.offsetX = e.pageX - this.touchX;
            this.node.style.transform = this.transforms + 'translateX(' + this.offsetX + 'px)';
        }
    }

    release() {
        this.isLocked = (Math.abs(this.offsetX) < this.node.getClientRects()[0].width * 0.6);
        const val = !this.isLocked ? (this.offsetX > 0 ? 100 : -100) : 0;
        this.node.style.transform = this.transforms + 'translateX(' + val + '%)';
        if (!this.isLocked) {
            this.onUnlockCallback();
        }
    }
}

// а здесь крутилки
export class LockCircle extends LockBase {
    constructor(callback) {
        super();
        this.node.classList.add('lock-circle');
        this.node.innerHTML = circles.circle0;
        this.transforms = 'translate(-50%, -50%)';
        this.rotation = (function () {
            const r = () => 360 * Math.random();
            return [r(), r(), r()];
        })();

        this.circleNodes = [];
        this.points = {x: 0, y: 0};
        this.currentQuad = {};

        for (let i = 0; i < 3; i++) {
            const node = document.createElement('div');
            node.innerHTML = circles['circle' + (i + 1)];
            node.className = 'circle circle-' + (i + 1);
            node.setAttribute('touch-action', 'none');
            node.style.transform = this.transforms + 'rotate(' + this.rotation[i] + 'deg)';
            this.node.appendChild(node);
            this.dist = 0;
            this.oldAngle = 0;
            const rotate = (e) => {
                const nodeRects = this.node.getBoundingClientRect();
                const center = {
                    x: nodeRects.x + nodeRects.width / 2,
                    y: nodeRects.y + nodeRects.height / 2
                };

                const angle = Math.atan2(
                    e.clientY - center.y,
                    e.clientX - center.x
                ) * 180 / Math.PI + 180;

                this.dist = Math.abs(angle - this.oldAngle) < 30 ? angle - this.oldAngle : 0;
                this.oldAngle = angle;
                this.rotation[i] += this.dist;

                this.rotation.forEach((el, index) => {
                    if (index !== i) {
                        const coeff = ((i > index || index - i === 2) ? -1 : 1) * ((index + 1) / (i + 1) * 0.65);
                        this.rotation[index] += this.dist * coeff;
                    }
                });

                this.rotateAll();
            };

            node.addEventListener('pointerdown', (e) => {
                this.points = {x: e.clientX, y: e.clientY};
                this.oldRotation = [...this.rotation];

                const nodeRects = this.node.getBoundingClientRect();
                const center = {
                    x: nodeRects.x + nodeRects.width / 2,
                    y: nodeRects.y + nodeRects.height / 2
                };

                this.oldAngle = Math.atan2(
                    e.clientY - center.y,
                    e.clientX - center.x
                ) * 180 / Math.PI + 180;

                node.addEventListener('pointermove', rotate);
                this.node.classList.add('touched');
                node.setPointerCapture(e.pointerId);
            });

            node.addEventListener('pointerup', (e) => {
                node.removeEventListener('pointermove', rotate);
                node.releasePointerCapture(e.pointerId);
                this.node.classList.remove('touched');
                this.check();
            });

            this.circleNodes[i] = node;
        }

        this.onUnlockCallback = callback;
    }

    rotateAll() {
        this.circleNodes.forEach((el, i) => {
            el.style.transform = this.transforms + 'rotate(' + this.rotation[i] + 'deg)';
        });
    }

    check() {
        const isValid = this.rotation.every((el) => {
            return (Math.abs(el % 360) < 10 || Math.abs(el % 360) > 350);
        });
        if (isValid) {
            // сводим стрелки к ближайшему нулю
            // TODO: я здесь криво посчитал. исправить надо.

            this.rotation = this.rotation.map((el) => {
                const t = Math.abs(el % 360);
                const val = t > 180 ? (el + (360 - el % 360)) : (el - (el % 360));
                return el >= 0 ? val : -val;
            });

            this.rotateAll();
            this.isLocked = false;
            this.onUnlockCallback();
        }
    }
}

// а здесь нажималки
export class LockMultiTouch extends LockBase {
    constructor(callback) {
        super();
        this.node.classList.add('lock-touch');
        this.onUnlockCallback = callback;

        this.node.addEventListener('pointerdown', (e) => {
            this.isLocked = false;
            this.node.classList.add('lock-touch__touched');
            this.node.setPointerCapture(e.pointerId);
            this.onUnlockCallback();
        });

        this.node.addEventListener('pointerup', (e) => {
            this.isLocked = true;
            this.node.classList.remove('lock-touch__touched');
            this.node.releasePointerCapture(e.pointerId);
        });
    }
}
