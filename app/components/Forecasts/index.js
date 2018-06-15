/**
*
* Forecasts
*
*/

import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';
import styleswc from '../Wcinfo/styles.css';
import { isNil } from 'lodash';
import Probability from '../Probability';

class Forecasts extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    isPredicted: this.props.match.prediction.isPredicted,
  };
  img = require('../Wcinfo/blank.gif');
  flags = require('../Wcinfo/flags.png');
  css = {
    margin: '5px',
    display: 'inline-block',
    width: '16px',
    height: '11px',
    background: `url(${this.flags}) no-repeat`,
  };
  probs = {
    team1: 30,
    team2: 30,
    draw: 40,
    team1Name: this.props.match.team1,
    team2Name: this.props.match.team2,
  }

  makePrediction = () => {
    const team1 = this.team1Field.value;
    const team2 = this.team2Field.value;

    if (team1 && team2) {
      const user = JSON.parse(localStorage.getItem('user'));
      const prediction = {
        iduser: !isNil(user) ? user.userID : '',
        username: !isNil(user) ? user.name : '',
        match_id: this.props.match.id,
        team1_pred: team1,
        team2_pred: team2,
        isPredicted: this.state.isPredicted,
        isBlocked: true,
        // match_date: 
      };
      this.props.makePrediction(prediction);
      this.setState({
        isPredicted: true,
      });
    }
  }

  render() {
    const showProbabilities = isNil(this.props.match.prediction.probabilities)
      ? <div></div>
      : <Probability probs={this.props.match.prediction.probabilities} team1Name={this.props.match.team1} team2Name={this.props.match.team2} />;
    return (
      <div className={styles.forecast}>
        <div className={classNames(styles.item, { [styles.predicted]: this.state.isPredicted })} key={this.props.match.id} >
          <div className={styleswc.matchContainer}>
            <div className={styleswc.date}>
              Match {this.props.index + 1}
            </div>
            <div className={styleswc.match}>
              <img src={this.img} style={this.css} className={styleswc[`flag${this.props.match.code1.ccode.toLowerCase()}`]} alt={this.props.match.code1.cname} />
              {this.props.match.team1}
            </div>
            <div className={styleswc.match}>
              <img src={this.img} style={this.css} className={styleswc[`flag${this.props.match.code2.ccode.toLowerCase()}`]} alt={this.props.match.code2.cname} />
              {this.props.match.team2}
            </div>
          </div>

          <div className={styleswc.results}>
            <div className={styleswc.resultsTitle}>&nbsp;</div>
            <input defaultValue={this.props.match.prediction.isPredicted ? this.props.match.prediction.team1 : ''} type="number" min="0" className={classNames(styles.match, styleswc.input)} placeholder="0" ref={(f) => { this.team1Field = f; }} />
            <input defaultValue={this.props.match.prediction.isPredicted ? this.props.match.prediction.team2 : ''} type="number" min="0" className={classNames(styles.match, styleswc.input)} placeholder="0" ref={(f) => { this.team2Field = f; }} />

          </div>

          <div className={styles.button}>
            <div className={styleswc.go} onClick={this.makePrediction}>GO!</div>
          </div>
        </div>
        <div>
          {showProbabilities}
        </div>
      </div>
    );
  }
}

Forecasts.propTypes = {
  index: React.PropTypes.number.isRequired,
  match: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    team1Info: React.PropTypes.string.isRequired,
    team2Info: React.PropTypes.string.isRequired,
    team1: React.PropTypes.string.isRequired,
    team2: React.PropTypes.string.isRequired,
    code1: React.PropTypes.shape({
      ccode: React.PropTypes.string.isRequired,
      cname: React.PropTypes.string.isRequired,
    }),
    code2: React.PropTypes.shape({
      ccode: React.PropTypes.string.isRequired,
      cname: React.PropTypes.string.isRequired,
    }),
    status: React.PropTypes.string.isRequired,
    date: React.PropTypes.string.isRequired,
    result: React.PropTypes.shape({
      team1: React.PropTypes.number.isRequired,
      team2: React.PropTypes.number.isRequired,
    }),
    prediction: React.PropTypes.shape({
      isPredicted: React.PropTypes.bool.isRequired,
      team1: React.PropTypes.number.isRequired,
      team2: React.PropTypes.number.isRequired,
      probabilities: React.PropTypes.shape({
        match_id: React.PropTypes.string.isRequired,
        team1: React.PropTypes.number.isRequired,
        team2: React.PropTypes.number.isRequired,
        draw: React.PropTypes.number.isRequired,
      }),
    }),
  }),
  makePrediction: React.PropTypes.func.isRequired,
};


export default Forecasts;
