import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-stopwatch-display',
    templateUrl: './stopwatch-display.component.html',
    styleUrls: ['./stopwatch-display.component.scss'],
})
export class StopwatchDisplayComponent implements OnInit {

    time: number;
    previousTime: Date;
    iterator: any;
    running: boolean;
    pauseTime: any;
    timerStarted = false;

    ngOnInit() {
        this.time = 0;
        this.pauseTime = 0;
    }

    start() {
        if (!this.timerStarted) {
            this.timerStarted = true;
        }
        this.previousTime = new Date();
        this.iterator = setInterval(this.timeUpdate.bind(this), 10);
    }

    timeUpdate(): any {
        if (this.running) {
            this.time = this.time + (new Date().getTime() - this.previousTime.getTime());
            this.previousTime = new Date();
        }
    }

    runningSwitch() {
        if (this.running === undefined) {
            this.running = true;
            this.start();
        } else {
            this.running = !this.running;
            this.previousTime = new Date();
        }
    }

    reset() {
        this.time = 0;
        this.running = undefined;
    }

    get timeElapsed() {
        return this.forceTwoDigit(this.getMinutes(this.time)) + ':' + this.forceTwoDigit(this.getSeconds(this.time));
    }

    getMilliseconds(t) {
        return Math.trunc((t / 10) % 100);
    }

    getSeconds(t) {
        return Math.trunc((t / 1000) % 60);
    }

    getMinutes(t) {
        return Math.trunc((t / 60000) % 60);
    }

    forceTwoDigit(n) {
        return n < 10 ? '0' + n : n;
    }

}
