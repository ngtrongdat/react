/**
*
* SystemAlert
*
*/

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class SystemAlert extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidUpdate(nextProps) {
    let alert = this.props.alerts;
    switch (alert.type) {
      case 'success':
        toast.success(this.props.alerts.message, {
          position: toast.POSITION.TOP_CENTER
        });
        break;
      case 'error':
        toast.error(this.props.alerts.message, {
          position: toast.POSITION.TOP_CENTER
        });
        break;
      default:
        toast(this.props.alerts.message, {
          position: toast.POSITION.TOP_CENTER
        });
        break;
    }
  }

  render() {
    return <ToastContainer />
  }
}

SystemAlert.propTypes = {

};

export default SystemAlert;
