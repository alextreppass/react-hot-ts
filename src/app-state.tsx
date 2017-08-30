import { action, observable } from 'mobx';

export class AppState {
  @observable count = 0;

  constructor() {
    setInterval(() => this.tick(), 1000);
  }

  @action
  tick () {
    this.count += 1;
  }

  @action
  resetTimer() {
    this.count = 0;
  }
}
