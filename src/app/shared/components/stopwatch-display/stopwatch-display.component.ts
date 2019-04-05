import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch-display',
  templateUrl: './stopwatch-display.component.html',
  styleUrls: ['./stopwatch-display.component.scss'],
})
export class StopwatchDisplayComponent implements OnInit {

  time: number;
  seed: Date;
  iterator: any;
  running: boolean;

  ngOnInit() {
    this.time = 0;
    this.pauseTime = 0;
  }

  timeUpdate(): any {
    if (this.running === true) {
      this.time = (new Date().getTime() - this.seed.getTime());
    } else {
      this.seed = new Date();
      this.pauseTime = new Date().getTime() - this.time;
    }
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
  start() {
    this.seed = new Date();
    this.iterator = setInterval(this.timeUpdate.bind(this), 1000);
  }
  runningSwitch() {
    if (this.running === undefined) {
      this.running = true;
      this.start();
    } else {
      this.running = !this.running;
    }
  }

}
