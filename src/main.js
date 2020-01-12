import React from 'react';
import ReactDom from 'react-dom';

import App from './app';

import {Provider} from 'mobx-react';
import stores from '~s';

stores.search.load().then(() => {
    stores.tickets.loadTickets();

    ReactDom.render(<Provider stores={stores}>
            <App/>
        </Provider>, document.querySelector('#app'));
});

