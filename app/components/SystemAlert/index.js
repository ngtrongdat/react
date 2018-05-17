/**
*
* SystemAlert
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Alert } from 'reactstrap';

const alertTypeToColor = {
  'success' : 'primary'
};

class SystemAlert extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
  }

  renderAlerts = (alerts) => {
    if (alerts.length){
      return alerts.map((alert, index) => (
        <Alert color={alertTypeToColor[alert.type]} toggle={this.onDismiss}>
          {alert.message}
        </Alert>
      ));
    } else {
      return '';
    }
  }

  render() {
    const alerts = this.renderAlerts(this.props.alerts);
    return (
      <div>
        {alerts}
      </div>
    );
  }
}

SystemAlert.propTypes = {

};

export default SystemAlert;
