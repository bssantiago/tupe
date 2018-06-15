/*
 *
 * NavigationContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectNavigationContainer from './selectors';
import styles from './styles.css';
import Navigation from '../../components/Navigation';
import { requestShips, selectShip, toggleDrawer, selectTab, requestUser } from './actions';

export class NavigationContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    requestShips: React.PropTypes.func.isRequired,
    requestUser: React.PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.requestShips();
    this.props.requestUser();
  }

  render() {
    return (
      <div className={styles.navigationContainer}>
        <Navigation {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = selectNavigationContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestUser: () => dispatch(requestUser()),
    requestShips: () => dispatch(requestShips()),
    selectShip: (ship) => dispatch(selectShip(ship)),
    selectTab: (tab) => dispatch(selectTab(tab)),
    toggleDrawer: () => dispatch(toggleDrawer()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
