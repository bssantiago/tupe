/*
 *
 * RulesContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectRulesContainer from './selectors';
import styles from './styles.css';
import Rules from '../../components/Rules';

export class RulesContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.rulesContainer}>
        <Rules {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = selectRulesContainer();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RulesContainer);
