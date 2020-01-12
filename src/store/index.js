import searchStore from './search';
import ticketsStore from './tickets';
import filtersStore from './filters';

import * as search from '~/api/searchId';
import * as tickets from '~/api/tickets';

class RooStore{
    constructor() {
        this.api = {
            search,
            tickets
        };
        this.storage = localStorage;
        this.search = new searchStore(this);
        this.tickets = new ticketsStore(this);
        this.filters = new filtersStore(this);
    }    
}

export default new RooStore();