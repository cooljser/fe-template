import {observable, action, makeObservable} from 'mobx';

class TestStore {
  constructor() {
    makeObservable(this);
  }

  @observable count = 0;

  @action setCount = (count: number) => {
    this.count = count;
  };
}

const testStore = new TestStore();

export default testStore;
