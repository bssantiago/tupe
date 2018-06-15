/**
*
* ShipInfo
*
*/

import React from 'react';
import styles from './styles.css';

function ShipInfo({ ship, shipName }) {
  const shipInfoData = () => (
    < div key={ship.name} >
      <h2>{ship.name}</h2>
      <p>{ship.model}</p>
      <p>{ship.url}</p>
    </div >
  );

  return (
    <div className={styles.shipInfo}>
      {shipName}
      {shipInfoData()}
    </div>
  );
}

ShipInfo.propTypes = {
  ship: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    model: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
  }),
  shipName: React.PropTypes.string.isRequired,
};

export default ShipInfo;
