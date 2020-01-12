import React from 'react';
import withStores from '~/hocs/withStores';

import styles from './ToggleBlock.module.scss';

class ToggleBlock extends React.Component {
  render() {
    let filtersodel = this.props.stores.filters;
    return (
      <div className={styles.toggleBlock}>
        <p className={filtersodel.activeToggleQuick == 'cheap' ? `${styles.toggleItem} ${styles.active}` : styles.toggleItem} 
            onClick={() => filtersodel.sortedFlights('cheap')}>Самый дешевый</p>
        <p className={filtersodel.activeToggleQuick == 'quick' ? `${styles.toggleItem} ${styles.active}` : styles.toggleItem} 
            onClick={() => filtersodel.sortedFlights('quick')}>Самый быстрый</p>
      </div>
    )
  }
}

export default withStores(ToggleBlock);