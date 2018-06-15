/**
*
* AppBar
*
*/

import React from 'react';
import { Link } from 'react-router';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';
import faSignInAlt from '@fortawesome/fontawesome-free-solid/faSignInAlt';
import classNames from 'classnames';
import { TABS } from '../../containers/NavigationContainer/constants';
import styles from './styles.css';
import { isNil } from 'lodash';
import img from './logoTupe.png';

function AppBar({ toggleDrawer, selectTab, selectedTab, user }) {
  const loginLink = isNil(user)
    ? <div className={styles.login}>
      <Link className={styles.link} to="/login"><FontAwesomeIcon icon={faSignInAlt} /> </Link>
    </div>
    :
    <div className={styles.loginSection}>
      <div className={styles.pic}>
        <img src={user.picture.data.url} alt={user.name} />
      </div>
    </div>
    ;

  return (
    <div className={styles.appBarContainer}>
      <div className={styles.appBar}>
        <div className={styles.iconButton} onClick={() => toggleDrawer()}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={styles.heading}>
          <img src={img} alt="logo" />
        </div>
        {loginLink}

      </div>
      <div className={styles.tabs}>
        <div className={styles.tabsConteiner}>
          <div onClick={() => selectTab(TABS[0])} className={classNames(styles.tab, { [styles.active]: selectedTab === TABS[0] })}>Matches</div>
          <div onClick={() => selectTab(TABS[1])} className={classNames(styles.tab, { [styles.active]: selectedTab === TABS[1] })}>Forecasts</div>
          <div onClick={() => selectTab(TABS[2])} className={classNames(styles.tab, { [styles.active]: selectedTab === TABS[2] })}>Positions</div>
        </div>
      </div>
    </div>
  );
}

AppBar.propTypes = {
  toggleDrawer: React.PropTypes.func.isRequired,
  selectTab: React.PropTypes.func.isRequired,
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

export default AppBar;
