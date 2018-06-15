/**
*
* Loader
*
*/

import React from 'react';


import styles from './styles.css';

function Loader() {
  return (
    <div className={styles.loader}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loader;
