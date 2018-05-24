/**
 *
 * HorsePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectHorseList } from './selectors';
import { getHorsesList } from './actions';
import reducer from './reducer';
import saga from './saga';

import HorseList from 'components/Horse/HorseList';

export class HorsePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.getHorsesList();
  }

  getHorsesList() {
    this.props.onGetHorsesList();
  }
  
  render() {
    return (
      <div>
        <HorseList items={this.props.horsesList} />
      </div>
    );
  }
}

HorsePage.propTypes = {
  getHorsesList: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  horsesList: makeSelectHorseList(),
});

function mapDispatchToProps(dispatch) {
  return {
    onGetHorsesList: () => {
      dispatch(getHorsesList());
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'horsePage', reducer });
const withSaga = injectSaga({ key: 'horsePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HorsePage);
