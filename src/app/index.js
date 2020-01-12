import React from 'react';
import withStores from '~/hocs/withStores';
import styles from './app.module.scss';
import Header from '~c/header';
import Main from '~c/Main';

import * as searchId from '~/api/searchId';


class App extends React.Component {

  render() {
      return (
        <div>
          <Header/>
          <Main />
        </div>
      )
    }
}

export default withStores(App);