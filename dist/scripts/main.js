/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = loadSvg;
/* eslint-disable */
const doorSvg = '<svg viewBox="0 0 327 456"><defs><style>.cls-1,.cls-3{fill:#fff;}.cls-2{fill:none;}.cls-2,.cls-3{stroke:#000;stroke-miterlimit:10;stroke-width:10px;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polyline class="cls-1" points="5 455 5 4 322 4 322 455"/><g id="inner-door"><polyline class="cls-2" points="31 455 31 33 295 33 295 455"/><polyline class="cls-3" points="31 455 31 33 295 33 295 455"/><circle class="cls-2" cx="80.5" cy="232" r="13.5"/></g><polyline class="cls-2" points="5 456 5 5 322 5 322 456"/></g></g></svg>';
/* harmony export (immutable) */ __webpack_exports__["d"] = doorSvg;

const lockSwipeSvg = '<svg viewBox="0 0 327 97"><defs><style>.cls-1{fill:#fff;stroke:#000;stroke-miterlimit:10;stroke-width:10px;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g class="lock-swipe__container"><rect class="cls-1" x="5" y="5" width="317" height="87"/><polyline class="cls-1 arrow" points="198.68 30.94 214 48.5 198.68 66.06"/><polyline class="cls-1 arrow" points="155.34 30.94 170.66 48.5 155.34 66.06"/><polyline class="cls-1 arrow" points="112 30.94 127.32 48.5 112 66.06"/></g></g></g></svg>';
/* harmony export (immutable) */ __webpack_exports__["e"] = lockSwipeSvg;

const shapes = {
    shape1: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177.74 177.74"><defs><style>.shps-1,.shps-3{fill:none;}.shps-2{fill:#fff;}.shps-2,.shps-3{stroke:#000;stroke-miterlimit:10;stroke-width:10px;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect class="shps-1" width="177.74" height="177.74"/><polygon class="shps-2" points="114.86 142.85 32.72 59.45 138.57 45.53 114.86 142.85"/><polyline class="shps-3" points="138.57 45.53 92.62 79 114.86 142.85"/><line class="shps-3" x1="32.72" y1="59.45" x2="92.62" y2="79"/></g></g></svg>',
    shape2: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177.74 177.74"><defs><style>.shps-1{fill:none;}.shps-2{fill:#fff;stroke:#000;stroke-miterlimit:10;stroke-width:10px;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect class="shps-1" width="177.74" height="177.74"/><polygon class="shps-2" points="81.08 145.36 28.87 103.87 47.98 47.46 108.59 40.93 152.88 96.88 81.08 145.36"/><line class="shps-2" x1="103.2" y1="85.37" x2="108.59" y2="40.93"/><line class="shps-2" x1="103.2" y1="85.37" x2="152.87" y2="96.88"/><line class="shps-2" x1="103.2" y1="85.37" x2="81.08" y2="145.36"/><line class="shps-2" x1="103.2" y1="85.37" x2="28.87" y2="103.87"/><line class="shps-2" x1="103.2" y1="85.37" x2="47.98" y2="47.46"/></g></g></svg>',
    shape3: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177.74 177.74"><defs><style>.shps-1{fill:none;}.shps-2{fill:#fff;stroke:#000;stroke-miterlimit:10;stroke-width:10px;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect class="shps-1" width="177.74" height="177.74"/><polygon class="shps-2" points="120.55 124.79 87.19 146.97 53.84 124.79 53.84 47.24 87.19 25.06 120.55 47.24 120.55 124.79"/><polyline class="shps-2" points="120.55 47.24 87.19 57.54 87.19 111.61 53.84 124.79"/><line class="shps-2" x1="87.19" y1="57.54" x2="53.84" y2="47.24"/><line class="shps-2" x1="87.19" y1="111.61" x2="120.55" y2="124.79"/></g></g></svg>'
};
/* harmony export (immutable) */ __webpack_exports__["f"] = shapes;

const circles = {
    circle0: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 328 328"><defs><style>.cls-1{fill:#fff;stroke:#000;stroke-miterlimit:10;stroke-width:10px;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><circle class="cls-1" cx="164" cy="164" r="159"/></g></g></svg>',
    circle1: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290.76 290.76"><defs><style>.crcl1-1,.crcl1-2{fill:none;}.crcl1-1{stroke:#000;stroke-miterlimit:10;stroke-width:10px;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><circle class="crcl1-1" cx="145.38" cy="145.38" r="117.53"/><circle class="crcl1-2" cx="145.38" cy="145.38" r="145.38"/><line class="crcl1-1" x1="145.38" y1="1.9" x2="145.38" y2="27.31"/></g></g></svg>',
    circle2: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 221.79 221.79"><defs><style>.crcl3-1,.crcl3-2{fill:none;}.crcl3-2{stroke:#000;stroke-miterlimit:10;stroke-width:10px;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><circle class="crcl3-1" cx="110.89" cy="110.89" r="110.89"/><circle class="crcl3-2" cx="110.89" cy="110.89" r="78.67"/><line class="crcl3-2" x1="110.89" y1="6.8" x2="110.89" y2="32.22"/></g></g></svg>',
    circle3: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140.39 140.39"><defs><style>.crcl3-1,.crcl3-2{fill:none;}.crcl3-2{stroke:#000;stroke-miterlimit:10;stroke-width:10px;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><circle class="crcl3-1" cx="70.2" cy="70.2" r="70.2"/><circle class="crcl3-2" cx="70.2" cy="70.2" r="42.24"/><line class="crcl3-2" x1="70.2" y1="2.54" x2="70.2" y2="27.95"/></g></g></svg>'
};
/* harmony export (immutable) */ __webpack_exports__["b"] = circles;


const chest = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 326 261.84"><defs><style>.chst-1{fill:#fff;stroke:#000;stroke-miterlimit:10;stroke-width:10px;}.chst-2{fill:none;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="chest"><g id="undertop"><path class="chst-1" d="M28.44,5H297.56A23.44,23.44,0,0,1,321,28.44v43.4a0,0,0,0,1,0,0H5a0,0,0,0,1,0,0V28.44A23.44,23.44,0,0,1,28.44,5Z"/><path class="chst-1" d="M28.44,5H39a0,0,0,0,1,0,0V71.84a0,0,0,0,1,0,0H5a0,0,0,0,1,0,0V28.44A23.44,23.44,0,0,1,28.44,5Z"/><path class="chst-1" d="M287,5h10.56A23.44,23.44,0,0,1,321,28.44v43.4a0,0,0,0,1,0,0H287a0,0,0,0,1,0,0V5A0,0,0,0,1,287,5Z"/></g><rect class="chst-1" x="5" y="71.84" width="316" height="185"/><rect class="chst-1" x="39" y="107.84" width="248" height="113"/><rect id="lock" class="chst-1" x="137" y="47.23" width="52" height="60.62"/><g id="reward-1"><polygon id="reward-1-svg" class="chst-1" points="100.42 179.06 73.37 151.6 108.23 147.01 100.42 179.06"/><rect class="chst-2" x="58.64" y="129.67" width="68.19" height="68.19"/></g><g id="reward-2"><polygon id="reward-2-2" data-name="reward-2" class="chst-1" points="163.98 181.88 146.79 168.22 153.08 149.65 173.04 147.5 187.62 165.92 163.98 181.88"/><rect class="chst-2" x="130.11" y="129.67" width="68.19" height="68.19"/></g><g id="reward-3"><polygon id="reward-3-svg" class="chst-1" points="246.63 175.11 235.64 182.41 224.66 175.11 224.66 149.58 235.64 142.27 246.63 149.58 246.63 175.11"/><rect class="chst-2" x="201.55" y="129.67" width="68.19" height="68.19"/></g></g></g></g></svg>';
/* harmony export (immutable) */ __webpack_exports__["a"] = chest;


function loadSvg(url) {
    return fetch(url + '.svg')
        .then((response) => {
            return response.status === 200 ? response.text() : '';
        })
        .then((data) => data);
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_level__ = __webpack_require__(2);
/*eslint no-console: "off"*/


document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#root');
    const levels = {};
    const crystalsInserted = [0, 0, 0];

    // запускаем уровни
    for (let i = 1; i <= 3; i++) {
        levels[i] = new __WEBPACK_IMPORTED_MODULE_0__modules_level__["b" /* Level */](i, () => {
            document.querySelector('.reward-' + i).classList.add('achieved');
        });
        levels[i].render(root);
    }
    const bonusLevel = new __WEBPACK_IMPORTED_MODULE_0__modules_level__["a" /* BonusLevel */]();
    bonusLevel.render(root);
    document.querySelectorAll('.rewards .reward').forEach((el) => {
        const id = el.dataset.id;
        el.oncontextmenu = (e) => {
            e.preventDefault();
            e.stopPropagation();
            return false;
        };

        let setRewardPosition;
        const initPosition = el.getBoundingClientRect();

        el.addEventListener('pointerdown', (e) => {
            el.classList.add('reward__touched');
            const elPosition = el.getClientRects()[0];
            const offset = {x: e.clientX - elPosition.x, y: e.clientY - elPosition.y};
            el.addEventListener('pointermove', setRewardPosition = function (e) {
                el.style.position = 'fixed';
                el.style.top = (e.clientY - offset.y) + 'px';
                el.style.left = (e.clientX - offset.x) + 'px';
            });
            el.setPointerCapture(e.pointerId);
        });

        el.addEventListener('pointerup', (e) => {
            el.classList.remove('reward__touched');
            el.removeEventListener('pointermove', setRewardPosition);

            // расчёт координат
            const slot = document.querySelector('#reward-' + id);
            const slotPosition = slot.getBoundingClientRect();
            const elPosition = el.getBoundingClientRect();
            const elCenter = {
                x: elPosition.x + (elPosition.width / 2),
                y: elPosition.y + (elPosition.height / 2)
            };
            const slotCenter = {
                x: slotPosition.x + (slotPosition.width / 2),
                y: slotPosition.y + (slotPosition.height / 2)
            };
            const validX = Math.abs(slotCenter.x - elCenter.x) <= 40;
            const validY = Math.abs(slotCenter.y - elCenter.y) <= 40;
            const validPos = (validX && validY);
            // END расчёт координат

            if (validPos) {
                el.style.top = slotCenter.y - (elPosition.height / 2) + 'px';
                el.style.left = slotCenter.x - (elPosition.width / 2) + 'px';

                // если все хорошо, вставляем камушек
                crystalsInserted[id - 1] = 1;

                // открываем сундук если вставили все камушки
                if (crystalsInserted.every((el) => el === 1)) {
                    unlockChest();
                }
            } else {
                el.style.top = initPosition.y + 'px';
                el.style.left = initPosition.x + 'px';
            }

            el.releasePointerCapture(e.pointerId);
        });
    });

    function unlockChest() {
        document.body.classList.add('game-complete');
        const reward = document.createElement('div');
        reward.className = 'final-reward';
        document.querySelector('.bonus-level').appendChild(reward);
        setTimeout(() => {
            reward.classList.add('show');
        }, 100);
    }
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__door__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loadSvg__ = __webpack_require__(0);
/*eslint no-console: "off"*/




class Level {
    constructor(number, completeCallback) {
        this.number = number;
        this.isSolved = false;
        this.background = document.createElement('div');
        this.background.classList.add(
            'level-container__layer',
            'level-container__background',
            'level-' + number + '__layer-1');
        Object(__WEBPACK_IMPORTED_MODULE_1__loadSvg__["c" /* default */])('images/layer-' + number).then((data) => {
            this.background.innerHTML = data;
        });

        this.door = new __WEBPACK_IMPORTED_MODULE_0__door__["a" /* Door1 */](number, () => {
            this.solve();
        });

        const doors = {
            1: new __WEBPACK_IMPORTED_MODULE_0__door__["a" /* Door1 */](number, () => {
                this.solve();
            }),
            2: new __WEBPACK_IMPORTED_MODULE_0__door__["b" /* Door2 */](number, () => {
                this.solve();
            }),
            3: new __WEBPACK_IMPORTED_MODULE_0__door__["c" /* Door3 */](number, () => {
                this.solve();
            })
        };

        this.door = doors[number];

        this.completeCallback = completeCallback;

        this.reward = document.createElement('div');
        this.reward.className = 'level-container__reward';
        this.reward.innerHTML = __WEBPACK_IMPORTED_MODULE_1__loadSvg__["f" /* shapes */]['shape' + this.number];
        this.reward.addEventListener('click', () => {
            this.takeReward();
        });
        this.door.node.appendChild(this.reward);
        //        document.addEventListener('solve', () => {this.solve()});
    }

    solve() {
        this.isSolved = true;
        if (Boolean(this.isSolved)) {
            this.reward.classList.add('show');
            this.content.classList.add('level-scaled');
        }
    }

    takeReward() {
        if (Boolean(this.isSolved)) {
            this.content.classList.add('level-complete');
            this.completeCallback();
        }
    }
    render(target) {
        this.content = document.createElement('div');
        this.content.className = 'level-container level-' + this.number;
        this.content.appendChild(this.background);
        this.content.appendChild(this.door.node);

        target.appendChild(this.content);
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = Level;


class BonusLevel {
    constructor() {
        this.content = document.createElement('div');
        this.content.className = 'level-container bonus-level';

        this.chest = document.createElement('div');
        this.chest.className = 'chest';
        this.chest.innerHTML = __WEBPACK_IMPORTED_MODULE_1__loadSvg__["a" /* chest */];

        this.content.appendChild(this.chest);
    }

    render(target) {
        target.appendChild(this.content);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BonusLevel;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loadSvg__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lock__ = __webpack_require__(4);



class DoorBase {
    constructor(number, onUnlock) {
        this.number = number;
        this.onUnlockCallback = onUnlock;

        this.level = number;
        this.node = document.createElement('div');
        this.node.classList.add('level-container__layer', 'level-container__door', 'level-' + number + '__door');
        this.node.innerHTML = __WEBPACK_IMPORTED_MODULE_0__loadSvg__["d" /* doorSvg */];

        this.isLocked = true;

        this.locks = document.createElement('div');
        this.locks.className = 'locks';
        this.node.appendChild(this.locks);
    }
}

class Door1 extends DoorBase {
    constructor(number, onUnlock) {
        super(1, onUnlock);
        this.lock1 = new __WEBPACK_IMPORTED_MODULE_1__lock__["c" /* LockSwipe */](1, this.unlock.bind(this));
        this.lock2 = new __WEBPACK_IMPORTED_MODULE_1__lock__["c" /* LockSwipe */](0, this.unlock.bind(this));
        this.locks.appendChild(this.lock1.node);
        this.locks.appendChild(this.lock2.node);
    }
    unlock() {
        if (!this.lock1.isLocked && !this.lock2.isLocked) {
            this.isLocked = false;
            this.onUnlockCallback();
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Door1;


class Door2 extends DoorBase {
    constructor(number, onUnlock) {
        super(2, onUnlock);
        this.lock = new __WEBPACK_IMPORTED_MODULE_1__lock__["a" /* LockCircle */](this.unlock.bind(this));
        this.locks.appendChild(this.lock.node);
    }
    unlock() {
        if (!this.lock.isLocked) {
            this.isLocked = false;
            this.onUnlockCallback();
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = Door2;


class Door3 extends DoorBase {
    constructor(number, onUnlock) {
        super(3, onUnlock);
        this.locksArr = [];
        for (let i = 0; i < 4; i++) {
            const l = new __WEBPACK_IMPORTED_MODULE_1__lock__["b" /* LockMultiTouch */](this.unlock.bind(this));
            this.locksArr.push(l);
            this.locks.appendChild(l.node);
        }
    }
    unlock() {
        if (this.locksArr.every((el) => !el.isLocked)) {
            this.isLocked = false;
            this.onUnlockCallback();
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["c"] = Door3;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loadSvg__ = __webpack_require__(0);


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
class LockSwipe extends LockBase {
    constructor(direction, callback) {
        super();
        const swipe = this.swipe.bind(this);
        this.direction = direction;
        this.offsetX = 0;
        this.node.classList.add('lock-swipe', this.direction === 1 ? 'lock-swipe__left' : 'lock-swipe__right');
        this.node.innerHTML = __WEBPACK_IMPORTED_MODULE_0__loadSvg__["e" /* lockSwipeSvg */];
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
/* harmony export (immutable) */ __webpack_exports__["c"] = LockSwipe;


// а здесь крутилки
class LockCircle extends LockBase {
    constructor(callback) {
        super();
        this.node.classList.add('lock-circle');
        this.node.innerHTML = __WEBPACK_IMPORTED_MODULE_0__loadSvg__["b" /* circles */].circle0;
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
            node.innerHTML = __WEBPACK_IMPORTED_MODULE_0__loadSvg__["b" /* circles */]['circle' + (i + 1)];
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
/* harmony export (immutable) */ __webpack_exports__["a"] = LockCircle;


// а здесь нажималки
class LockMultiTouch extends LockBase {
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
/* harmony export (immutable) */ __webpack_exports__["b"] = LockMultiTouch;



/***/ })
/******/ ]);