/*eslint no-console: "off"*/
import {Level, BonusLevel} from './modules/level';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#root');
    const levels = {};
    const crystalsInserted = [0, 0, 0];

    // запускаем уровни
    for (let i = 1; i <= 3; i++) {
        levels[i] = new Level(i, () => {
            document.querySelector('.reward-' + i).classList.add('achieved');
        });
        levels[i].render(root);
    }

    const bonusLevel = new BonusLevel();
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
