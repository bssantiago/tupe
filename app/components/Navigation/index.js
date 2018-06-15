/**
*
* Navigation
*
*/

import React from 'react';
import AppBar from '../AppBar';
import Drawer from '../Drawer';
import styles from './styles.css';

function Navigation({ ships, selectShip, toggleDrawer, isDrawerOpen, selectTab, selectedTab, user }) {
  return (
    <div className={styles.navigation}>
      <AppBar toggleDrawer={toggleDrawer} selectTab={selectTab} selectedTab={selectedTab} user={user} />
      <Drawer
        items={ships}
        selectItem={selectShip}
        itemLabelAttr="name"
        itemKeyAttr="name"
        isDrawerOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
      />
    </div>
  );
}

Navigation.propTypes = {
  ships: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      model: React.PropTypes.string.isRequired,
      url: React.PropTypes.string.isRequired,
    })
  ),
  selectShip: React.PropTypes.func.isRequired,
  selectTab: React.PropTypes.func.isRequired,
  toggleDrawer: React.PropTypes.func.isRequired,
  isDrawerOpen: React.PropTypes.bool.isRequired,
  selectedTab: React.PropTypes.string.isRequired,
  user: React.PropTypes.shape({
    email: React.PropTypes.string.isRequired,
    userID: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    picture: React.PropTypes.shape({
      data: React.PropTypes.shape({
        url: React.PropTypes.string.isRequired,
      }),
    }),
  }),
};

export default Navigation;
