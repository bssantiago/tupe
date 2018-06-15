/**
*
* ProbabilityPie
*
*/

import React from 'react';
import classNames from 'classnames';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHandshake from '@fortawesome/fontawesome-free-solid/faHandshake';
import styles from './styles.css';

function ProbabilityPie({ probability, teamName }) {
  let right = {};
  let pie = {};

  const value = ((probability / 100) * 360);
  const left = {
    WebkitTransform: `rotate(${value}deg)`,
    transform: `rotate(${value}deg)`,
  };
  if ((probability) <= 50) {
    pie = {
      clip: 'rect(0, 1em, 1em, 0.5em)',
    };
    right = {
      display: 'none',
    };
  } else {
    pie = {
      clip: 'rect(auto, auto, auto, auto)',
    };
    right = {
      WebkitTransform: 'rotate(180}deg)',
      transform: 'rotate(180deg)',
    };
  }

  const label = (teamName === '') ? <div className={styles.probabilityName}> <FontAwesomeIcon icon={faHandshake} /> </div> : <div className={styles.probabilityName}> <p> {teamName} </p> </div>;

  return (
    <div className={styles.probabilityPie}>
      <div className={classNames(styles.setsize, styles.chartscontainer)}>
        <div className={classNames(styles.piewrapper, styles.progress75, styles.style2)}>
          <span className={styles.label}>{probability}<span className={styles.smaller}>%</span></span>
          <div className={styles.pie} style={pie}>
            <div className={classNames(styles.leftside, styles.halfcircle)} style={left}></div>
            <div className={classNames(styles.rightside, styles.halfcircle)} style={right}></div>
          </div>
          <div className={styles.shadow}></div>

        </div>
        {label}
      </div>
    </div>
  );
}

ProbabilityPie.propTypes = {
  probability: React.PropTypes.number.isRequired,
  teamName: React.PropTypes.string.isRequired,
};

export default ProbabilityPie;
