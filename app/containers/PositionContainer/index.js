/*
 *
 * PositionContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectPositionContainer from './selectors';
import styles from './styles.css';
import Positions from '../../components/Positions';
import { getPositions } from './actions';

export class PositionContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    requestPositions: React.PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.requestPositions();
  }

  render() {
    return (
      <div className={styles.positionContainer}>
        <Positions {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = selectPositionContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestPositions: () => dispatch(getPositions()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PositionContainer);
