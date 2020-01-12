import React from 'react';
import withStores from '~/hocs/withStores';

import styles from './Filters.module.scss';

class Filters extends React.Component {
  render() {
    let formFields = [];
    let filtersModel = this.props.stores.filters;
    for(let name in filtersModel.formData){
      let field = filtersModel.formData[name];
      formFields.push(
        <label key={name} className={styles.checkboxItem}>
          <input type="checkbox" name={name} defaultChecked={field.checked} onChange={(e) => filtersModel.filters(name)}/>
          <span className={styles.checkboxIcon}></span>
          <span>{field.label}</span>
        </label>
      );
    }
    return (
      <React.Fragment>
          <div className={styles.checkList}>
            {formFields}
          </div>
      </React.Fragment>
    )
  }
}

export default withStores(Filters);