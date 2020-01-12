import {observable, computed, action, runInAction} from 'mobx';

export default class{
  @observable searchId;

  constructor(rootStore){
    this.rootStore = rootStore;
    this.api = this.rootStore.api.search;
    this.storage = this.rootStore.storage;
  }

  @action load() {
    return new Promise((resolve, reject) => {
      this.api.gettingSearchId().then((data) => {
          this.searchId = data.searchId;
          resolve(true);
      });
    })
  }

}
