/**
*
* ForecastList
*
*/

import React from 'react';

import Forecasts from '../Forecasts';
import styles from './styles.css';
import { map, groupBy } from 'lodash';
import Loader from '../Loader';

function ForecastList({ matches, makePrediction, hasPredictions }) {
  if (hasPredictions) {
    const itemNodes = (mm) => map(mm, (match, i) => (
      <Forecasts key={i} index={i} match={match} makePrediction={makePrediction} />
    ));

    const matchesDays = groupBy(matches, 'date');

    const ii = () => {
      const items = [];

      Object.keys(matchesDays).forEach((key, index) => {
        items.push(
          <div className={styles.matchDay} key={index}>
            <div className={styles.matchDayDate}>{matchesDays[key][0].date}</div>
            <div className={styles.matchesThisDay}>
              {itemNodes(matchesDays[key])}
            </div>
          </div>
        );
      });
      return items;
    };
    return (
      <div className={styles.forecastList}>
        {ii()}
      </div>
    );
  }

  return (
    <div className={styles.loader}>
      <Loader />
    </div>
  );
}

ForecastList.propTypes = {
  hasPredictions: React.PropTypes.bool.isRequired,
  matches: React.PropTypes.arrayOf(
    React.PropTypes.shape({
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
    })
  ),
  makePrediction: React.PropTypes.func.isRequired,
};

export default ForecastList;
