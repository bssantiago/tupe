/*
 *
 * ShipInfoContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectShipInfoContainer from './selectors';
import ShipInfo from '../../components/ShipInfo';
import { requestShip } from './actions';

export class ShipInfoContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    shipName: React.PropTypes.string.isRequired,
    requestShip: React.PropTypes.func.isRequired,
  }
  componentWillMount() {
    this.props.requestShip(this.props.shipName);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.shipName !== this.props.shipName) {
      this.props.requestShip(newProps.shipName);
    }
  }

  render() {
    return (<ShipInfo {...this.props} />
    );
  }
}

const mapStateToProps = selectShipInfoContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestShip: (shipName) => dispatch(requestShip(shipName)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShipInfoContainer);
