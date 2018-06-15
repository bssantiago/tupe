/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import NavigationContainer from '../../containers/NavigationContainer';
import LoginContainer from '../../containers/LoginContainer';
import { isNil } from 'lodash';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    children: React.PropTypes.element,
  }

  render() {
    const userExists = !isNil(localStorage.getItem('user')) && localStorage.getItem('user') !== '';
    const user = (userExists) ? JSON.parse(localStorage.getItem('user')) : { name: '' };
    if (user.name !== '') {
      return (
        <div>
          <NavigationContainer />
          {this.props.children}
        </div>
      );
    }
    return (
      <div>
        <LoginContainer />

      </div>
    );
  }
}
