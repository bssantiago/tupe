/**
*
* Wcinfo
*
*/

import React from 'react';
import { map } from 'lodash';
import 'file?name=[name].[ext]!./blank.gif';
import styles from './styles.css';
import Loader from '../Loader';

function Wcinfo({ matches /* makePrediction*/ }) {
  const img = require('./blank.gif');
  const flags = require('./flags.png');
  const css = {
    margin: '5px',
    display: 'inline-block',
    width: '16px',
    height: '11px',
    background: `url(${flags}) no-repeat`,
  };

  //  <img src={img} style={css} className={styles[`flag${match.code1.ccode}`]} alt={match.code1.cname} />
  //  <img src={img} style={css} className={styles[`flag${match.code2.ccode}`]} alt={match.code2.cname} />
  const itemNodes = map(matches, (match, i) => (
    <div className={styles.item} key={match.id}>
      <div className={styles.matchContainer}>
        <div className={styles.date}>
          Match {i + 1}
        </div>
        <div className={styles.match}>
          <img src={img} style={css} className={styles[`flag${match.code1.ccode.toLowerCase()}`]} alt={match.code1.cname} />
          {match.team1}
        </div>
        <div className={styles.match}>
          <img src={img} style={css} className={styles[`flag${match.code2.ccode.toLowerCase()}`]} alt={match.code2.cname} />
          {match.team2}
        </div>
      </div>

      <div className={styles.results}>
        <div className={styles.resultsTitle}>&nbsp;</div>
        <div className={styles.match}> {match.result.team1} </div>
        <div className={styles.match}> {match.result.team2} </div>
      </div>

      <div className={styles.info}>
        <div className={styles.resultsTitle}>&nbsp;</div>
        <div className={styles.date}>{match.date}</div>
        <div>{match.status}</div>
      </div>
    </div>
  ));
  /*
  <div className={styles.button} onClick={() => makePrediction()} >
          GO!
        </div>
  */

  if (matches) {
    return (
      <div className={styles.wcinfo}>
        {itemNodes}
      </div>
    );
  }
  return (
    <div className={styles.loader}>
      <Loader />
    </div>
  );
}

Wcinfo.propTypes = {
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
    })
  ),
  makePrediction: React.PropTypes.func.isRequired,
};

export default Wcinfo;
