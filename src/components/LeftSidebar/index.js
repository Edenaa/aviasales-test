import React from 'react';

import Filters from '~c/filters';
import styles from './LeftSidebar.module.scss';

export default function() {
  let checkNames = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];
  let checkItems = checkNames.map((name, i) =>
    <label key={i} className={styles.checkboxItem}>
      <input type="checkbox" />
      <span className={styles.checkboxIcon}></span>
      <span>{name}</span>
    </label>
  )
  return (
    <React.Fragment>
      <section className={styles.leftSidebar}>
        <p className={styles.title}>Количество пересадок</p>
        <Filters/>
      </section>
    </React.Fragment>
  )
}