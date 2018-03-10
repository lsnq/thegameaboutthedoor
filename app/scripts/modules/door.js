import {doorSvg} from '../loadSvg';
import {LockSwipe, LockCircle, LockMultiTouch} from './lock';

class DoorBase {
    constructor(number, onUnlock) {
        this.number = number;
        this.onUnlockCallback = onUnlock;

        this.level = number;
        this.node = document.createElement('div');
        this.node.classList.add('level-container__layer', 'level-container__door', 'level-' + number + '__door');
        this.node.innerHTML = doorSvg;

        this.isLocked = true;

        this.locks = document.createElement('div');
        this.locks.className = 'locks';
        this.node.appendChild(this.locks);
    }
}

export class Door1 extends DoorBase {
    constructor(number, onUnlock) {
        super(1, onUnlock);
        this.lock1 = new LockSwipe(1, this.unlock.bind(this));
        this.lock2 = new LockSwipe(0, this.unlock.bind(this));
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

export class Door2 extends DoorBase {
    constructor(number, onUnlock) {
        super(2, onUnlock);
        this.lock = new LockCircle(this.unlock.bind(this));
        this.locks.appendChild(this.lock.node);
    }
    unlock() {
        if (!this.lock.isLocked) {
            this.isLocked = false;
            this.onUnlockCallback();
        }
    }
}

export class Door3 extends DoorBase {
    constructor(number, onUnlock) {
        super(3, onUnlock);
        this.locksArr = [];
        for (let i = 0; i < 4; i++) {
            const l = new LockMultiTouch(this.unlock.bind(this));
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
