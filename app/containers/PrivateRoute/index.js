/**
 *
 * PrivateRoute
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Route, Redirect } from 'react-router-dom';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPrivateRoute from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import Header from 'components/Header';

import { LOCAL_STORAGE_ACCOUNT_KEY } from 'containers/App/constants';
import { reactLocalStorage } from 'utils';

export class PrivateRoute extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    console.log(this.props);
    this.authentication = reactLocalStorage.getObject(LOCAL_STORAGE_ACCOUNT_KEY);
  }

  render() {
    let Component = this.props.component;
    return (
      <div>
        <Header />
        <Route
          render={props =>
            this.authentication.token ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: props.location }
                }}
              />
            )
          }
        />
      </div>
    );
  }
}

PrivateRoute.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  privateroute: makeSelectPrivateRoute(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'privateRoute', reducer });
const withSaga = injectSaga({ key: 'privateRoute', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PrivateRoute);
