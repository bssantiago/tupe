/**
*
* Positions
*
*/

import React from 'react';
import { map } from 'lodash';
import styles from './styles.css';

function Positions({ positions }) {
  const items = map(positions, (position, i) => (
    <div className={styles.position}>
      <div className={styles.columnDigits}>{i + 1}</div>
      <div className={styles.columnName}>{position.name}</div>
      <div className={styles.columnDigitsScores}>{position.score}</div>
    </div>
  ));

  return (
    <div className={styles.positions}>
      <div className={styles.positionsHeader}>
        <div className={styles.title}>Table</div>
        <div className={styles.subTitle}>Global Scores</div>
      </div>
      <div className={styles.positionsContainer}>

        <div className={styles.positionsList}>
          <div className={styles.positionHeader}>
            <div className={styles.columnNameTitle}>Players</div>
            <div className={styles.columnDigitsScores}>Pts</div>
          </div>
          {items}
        </div>
      </div>
      <div className={styles.footer}>

      </div>
    </div>
  );
}

Positions.propTypes = {
  positions: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired,
      socre: React.PropTypes.number.isRequired,
    }),
  ),
};

export default Positions;
