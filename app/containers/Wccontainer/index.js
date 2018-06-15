/*
 *
 * Wccontainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectWccontainer from './selectors';
import styles from './styles.css';
import Wcinfo from '../../components/Wcinfo';
import { requestMatches, makePrediction } from './actions';

export class Wccontainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    requestMatches: React.PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.requestMatches();
  }

  render() {
    return (
      <div className={styles.wccontainer}>
        <Wcinfo {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = selectWccontainer();

function mapDispatchToProps(dispatch) {
  return {
    requestMatches: () => dispatch(requestMatches()),
    makePrediction: (match) => dispatch(makePrediction(match)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Wccontainer);
