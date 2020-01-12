import React from 'react';
import withStores from '~/hocs/withStores';

import ToggleBlock from '~c/ToggleBlock'; 
import TicketsList from '~c/TicketsList';
import styles from './RightSidebar.module.scss';


class RightSidebar extends React.Component {
  render() {
    return(
      <React.Fragment>
        <section className={styles.rightSidebar}>
          <ToggleBlock/>
          <TicketsList/>
        </section>
      </React.Fragment>
    )
  }
}

export default withStores(RightSidebar);