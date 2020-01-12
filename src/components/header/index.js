import React from 'react';

import styles from './header.module.scss';
import logo from '~/img/logo.svg';

export default function() {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <img src={logo} className={styles.headerImg}/>
      </header>
    </React.Fragment>
  )
}