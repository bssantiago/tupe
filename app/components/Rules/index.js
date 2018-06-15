/**
*
* Rules
*
*/

import React from 'react';


import styles from './styles.css';

function Rules() {
  return (
    <div className={styles.rules}>
      <div className={styles.ruleSection}>
        <div className={styles.ruleTitle}>How to play?</div>
        <div className={styles.rulesContainer}>
          <div className={styles.rule}>
            1 - First you need to log in, if you not perform a login you'll be only able to see the matchs schedule.
          </div>
          <div className={styles.rule}>
            2 - After perform log in, you'll see a list of matches.... there you can predict the result of those matches.
          </div>
          <div className={styles.rule}>
            3 - We match those predictions with the real data... with that info you'll get a score
          </div>
        </div>
      </div>
      <div className={styles.ruleSection}>
        <div className={styles.ruleTitle}>Score</div>
        <div className={styles.rulesContainer}>
          <div className={styles.rule}>
            1 - If yout prediction was accurate in terms of win, lose or draw you get +1 point
          </div>
          <div className={styles.rule}>
            2 - If yout prediction was accurate and the result match the real score you'll get extra +2 points
          </div>
          <div className={styles.rule}>
            BONUS : If you bet for the less probable winner and you are accurate in terms of win,lose or draw,
            you'll get a bonification equal to the probablility against that result.

          </div>

          <div className={styles.rule}>
            example : supouse that 10 people predict a match.
            5 of those thought that team1 is going to win.
            2 of those thought that team2 is going to win.
            3 of those thought that the result are going to be even.

            team1 : 50% of the people.
            team2 : 20% of the people.
            even : 30% of the people.

            if you go with team2 then you have the chance to win bonus points...

            We calculate bonus points with this formula : UpperRound ( (1/3 - probability) * 10 ).

            So for team2 will be ===> UpperRound ( (1/3 - 0.2) * 10 ) = 2.

          </div>

        </div>
      </div>
    </div>
  );
}

export default Rules;
