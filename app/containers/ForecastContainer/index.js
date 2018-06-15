/*
 *
 * ForecastContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectForecastContainer from './selectors';
import styles from './styles.css';
import ForecastList from '../../components/ForecastList';
import { requestMatches, makePrediction } from './actions';

export class ForecastContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    requestMatches: React.PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.requestMatches();
  }

  render() {
    return (
      <div className={styles.forecastContainer}>
        <ForecastList {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = selectForecastContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestMatches: () => dispatch(requestMatches()),
    makePrediction: (match) => dispatch(makePrediction(match)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ForecastContainer);
