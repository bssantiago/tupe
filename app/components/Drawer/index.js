/**
*
* Drawer
*
*/

import React from 'react';
import classNames from 'classnames';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';
import styles from './styles.css';

function Drawer({ items, selectItem, itemLabelAttr, itemKeyAttr, isDrawerOpen, toggleDrawer }) {
  const itemNodes = items.map(item => (
    <div
      className={styles.item}
      key={item[itemKeyAttr]}
      onClick={() => selectItem(item)}
    >
      {item[itemLabelAttr]}
    </div>
  ));
  return (
    <div className={classNames(styles.drawer, { [styles.drawerOpen]: isDrawerOpen })}>
      <div className={styles.title}>
        <div><FontAwesomeIcon icon={faBars} onClick={() => toggleDrawer()} /></div>
        <div>MENU</div>
        <div><FontAwesomeIcon icon={faTimes} onClick={() => toggleDrawer()} /></div>
      </div>
      {itemNodes}
    </div>
  );
}

Drawer.propTypes = {
  items: React.PropTypes.array.isRequired,
  selectItem: React.PropTypes.func.isRequired,
  itemLabelAttr: React.PropTypes.string.isRequired,
  itemKeyAttr: React.PropTypes.string.isRequired,
  isDrawerOpen: React.PropTypes.bool.isRequired,
  toggleDrawer: React.PropTypes.func.isRequired,
};

export default Drawer;
