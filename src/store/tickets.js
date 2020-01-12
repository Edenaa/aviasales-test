import {observable, action} from 'mobx';

export default class {

  constructor(rootStore){
    this.rootStore = rootStore;
    this.api = this.rootStore.api.tickets;
    this.searchStore = this.rootStore.search;
    this.storage = this.rootStore.storage;
  }

  // @observable stop;
  @observable currentTickets = 0;
  @observable tickets = [];
  @observable searchId = this.searchStore.searchId;

  @action loadTickets() {
    return new Promise((resolve, reject) => {
      // var interval = setInterval(() => {
        this.api.gettingTickets(this.searchId).then((data) => {
            this.tickets = this.tickets.concat(data.tickets.sort((a, b) => {
              a.allDuration = a.segments.map(item => item.duration).reduce((sum, current) => sum + current, 0);
              b.allDuration = b.segments.map(item => item.duration).reduce((sum, current) => sum + current, 0);
              a.stopsLength = [String(a.segments[0].stops.length)];
              b.stopsLength = [String(b.segments[0].stops.length)];
              return a.price - b.price;
            })); 
            this.stop = data.stop;
            // if(this.stop) {
              // clearInterval(interval);
            // }
        }).catch((e) => {
          console.log(e)
        });
      // }, 1000);
      
      resolve(true);
    })
  }

  @action slices() {
    this.currentTickets += 5
  }

  hoursGet(d) {
    let date = new Date(d);
    let hours = date.getHours();
    return hours
  }

  minutesGet(d) {
    let date = new Date(d);
    let minutes = date.getMinutes();
    return minutes
  }

  convertHours(n) {
    return ('hours-1',n / 60)
  }

  convertHoursToMinutes(h) {
    let hours = this.convertHours(h);
    return Math.floor(hours)
  }

  convertMinutes(h) {
    let hours = this.convertHours(h);
    let rhours = this.convertHoursToMinutes(h);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return rminutes
  }

  timeConvertOrigin(d) {
    let hours = this.hoursGet(d);
    let minutes = this.minutesGet(d);
    if(minutes.toString().length == 1) {
      minutes = '0'+ minutes
    }
    return hours + ':' + minutes
  }

  timeConvertDestination(d, t) {
    let hours = this.hoursGet(d) * 60;
    let minutes = this.minutesGet(d);
    let duration = t;
    let sum = hours + minutes + duration;
    let rhours = this.convertHoursToMinutes(sum);
    let rminutes = this.convertMinutes(sum);
    if (rhours > 24) {
      var h = Math.floor(rhours / 24);
      rhours = Math.round(((rhours / 24) - h) * 24)
    } else if(rhours == 24) {
      rhours = '00'
    }
    if(rminutes.toString().length == 1) {
      rminutes = '0'+ rminutes
    }

    return rhours + ':' + rminutes
  }

  timeConvertDuration(n) {
    let rhours = this.convertHoursToMinutes(n);
    let rminutes = this.convertMinutes(n);
    return rhours + "ч " + rminutes + "м";
  }

  num2str(n, text_forms) {  
    n = Math.abs(n) % 100; var n1 = n % 10;
    if (n > 10 && n < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 == 1) { return text_forms[0]; }
    return text_forms[2];
  }
  
}