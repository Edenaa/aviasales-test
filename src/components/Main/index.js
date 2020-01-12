import React from 'react';

import withStores from '~/hocs/withStores';
import LeftSidebar from '~c/LeftSidebar';
import RightSidebar from '~c/RightSidebar';
import styles from './Main.module.scss';

class Main extends React.Component {
  render() {
    return(
      <div className={styles.mainContent}>
      <LeftSidebar/>
      <RightSidebar/>
    </div>
    )
  }
}

export default withStores(Main);