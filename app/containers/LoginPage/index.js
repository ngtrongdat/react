/**
 *
 * LoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLoginPage from './selectors';
import { userLogin } from '../App/actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button, Form, FormGroup, Label, FormText, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import _ from 'lodash';

export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      disableSubmit: true
    };
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
    this.validateSubmit = this.validateSubmit.bind(this);
  }

  handleValidSubmit = (event, values) => {
    this.props.onSubmitForm(event, values);
  }

  handleInvalidSubmit(event, errors, values) {

  }

  validateSubmit(state) {
    let { username, password } = state;
    this.setState({
      disableSubmit: _.isEmpty(username) || _.isEmpty(password)
    });
  }

  onInputChange = (e) => {
    this.setState(
      { [e.target.id] : e.target.value },
      () => { this.validateSubmit(this.state); }
    );
  }

  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <AvForm onInvalidSubmit={this.handleInvalidSubmit} onValidSubmit={this.handleValidSubmit}>
          <FormGroup>
            <Label for="username">Username</Label>
            <AvField type="text" name="username" id="username" placeholder="Username" value={this.state.username} onChange={this.onInputChange} required />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <AvField type="password" name="password" id="password" placeholder="Password" value={this.state.password} onChange={this.onInputChange} required />
          </FormGroup>
          <Input className="btn btn-primary" type="submit" value="Login" disabled={this.state.disableSubmit}/>
        </AvForm>
      </div>
    );
  }
}

LoginPage.propTypes = {
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  password: PropTypes.string,
  disableSubmit: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({

});

function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: (evt, values) => {
      dispatch(userLogin(values));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'loginPage', reducer });
const withSaga = injectSaga({ key: 'loginPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginPage);
