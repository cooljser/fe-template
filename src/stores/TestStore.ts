import {observable, action} from 'mobx';

class TestStore {
  @observable count = 0;

  @action setCount = (count: number) => {
    this.count = count;
  };
}

const testStore = new TestStore();

export default testStore;
