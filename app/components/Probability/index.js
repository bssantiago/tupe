/**
*
* Probability
*
*/

import React from 'react';
import styles from './styles.css';
import ProbabilityPie from '../ProbabilityPie';

function Probability({ probs, team1Name, team2Name }) {
  return (
    <div className={styles.probability}>
      <ProbabilityPie probability={probs.team1} teamName={team1Name} />
      <ProbabilityPie probability={probs.draw} teamName={''} />
      <ProbabilityPie probability={probs.team2} teamName={team2Name} />
    </div>
  );
}

Probability.propTypes = {
  probs: React.PropTypes.shape({
    team1: React.PropTypes.number.isRequired,
    team2: React.PropTypes.number.isRequired,
    draw: React.PropTypes.number.isRequired,
  }),
  team1Name: React.PropTypes.string.isRequired,
  team2Name: React.PropTypes.string.isRequired,
};

export default Probability;
