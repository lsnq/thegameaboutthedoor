/*eslint no-console: "off"*/
import {Door1, Door2, Door3} from './door';
import loadSvg from '../loadSvg';
import {shapes, chest} from '../loadSvg';

export class Level {
    constructor(number, completeCallback) {
        this.number = number;
        this.isSolved = false;
        this.background = document.createElement('div');
        this.background.classList.add(
            'level-container__layer',
            'level-container__background',
            'level-' + number + '__layer-1');
        loadSvg('images/layer-' + number).then((data) => {
            this.background.innerHTML = data;
        });

        this.door = new Door1(number, () => {
            this.solve();
        });

        const doors = {
            1: new Door1(number, () => {
                this.solve();
            }),
            2: new Door2(number, () => {
                this.solve();
            }),
            3: new Door3(number, () => {
                this.solve();
            })
        };

        this.door = doors[number];

        this.completeCallback = completeCallback;

        this.reward = document.createElement('div');
        this.reward.className = 'level-container__reward';
        this.reward.innerHTML = shapes['shape' + this.number];
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

export class BonusLevel {
    constructor() {
        this.content = document.createElement('div');
        this.content.className = 'level-container bonus-level';

        this.chest = document.createElement('div');
        this.chest.className = 'chest';
        this.chest.innerHTML = chest;

        this.content.appendChild(this.chest);
    }

    render(target) {
        target.appendChild(this.content);
    }
}
