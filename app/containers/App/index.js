/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import PrivateRoute from 'containers/PrivateRoute';
import SystemAlert from 'components/SystemAlert';
import Footer from 'components/Footer';

import injectReducer from 'utils/injectReducer';
//import injectSaga from 'utils/injectSaga';
import { makeSelectAlert } from './selectors';
import reducer from './reducer';
//import saga from './saga';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;
export class App extends React.PureComponent {

  render(){
    const { alerts } = this.props;
    const alertsProps = {
      alerts
    };
    return (
      <AppWrapper>
        <SystemAlert {...alertsProps} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <PrivateRoute path="/features" component={FeaturePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <Footer />
      </AppWrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  alerts: makeSelectAlert()
});

const withConnect = connect(mapStateToProps);
//const withSaga = injectSaga({ key: 'app', saga });

export default compose(
  //withSaga,
  withConnect,
)(App);
