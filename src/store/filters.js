import {observable, action} from 'mobx';

export default class {

  constructor(rootStore){
    this.rootStore = rootStore;
    this.ticketsStore = this.rootStore.tickets;
    this.storage = this.rootStore.storage;
  }

  @observable tickets;
  @observable activeToggleQuick = 'cheap';

  @observable formData = [
    {
      label: 'Без пересадок',
      checked: true,
      num: '0'
    },
    {
      label: '1 пересадка',
      checked: true,
      num: '1'
    },
    {
      label: '2 пересадки',
      checked: true,
      num: '2'
    },
    {
      label: '3 пересадки',
      checked: true,
      num: '3'
    }
  ]

  @action sortedFlights(activeItem) {
    this.activeToggleQuick = activeItem;
    switch (activeItem) {
      case 'cheap':
        if(this.tickets) {
          this.tickets = this.tickets.sort((a, b) => {
            return a.price - b.price
          });
        } else {
          this.ticketsStore.tickets = this.ticketsStore.tickets.sort((a, b) => {
            return a.price - b.price
          });
        }
        break;
      case 'quick':
        if(this.tickets) {
          this.tickets = this.tickets.sort((a, b) => {
            return a.allDuration - b.allDuration
          });
        } else {
          this.ticketsStore.tickets = this.ticketsStore.tickets.sort((a, b) => {
            return a.allDuration - b.allDuration
          });
        }
        break;
      default:
        alert('Error')
        break;
    }
  }


  @action filters(name) {
    let field = this.formData[name];
    field.checked = !field.checked;
    let checked = this.formData.filter(i => i.checked).map(i => i.num);
    this.tickets = this.ticketsStore.tickets.filter(i => 
      i.stopsLength.some(k =>
        checked.includes(k)
      )
    )
  }
}