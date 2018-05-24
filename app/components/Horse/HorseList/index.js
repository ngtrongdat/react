/**
*
* HorseList
*
*/

import React from 'react';
// import styled from 'styled-components';
import List from 'components/List';
import ListItem from 'components/ListItem';
import RepoListItem from 'containers/RepoListItem';

function HorseList ({items}) { // eslint-disable-line react/prefer-stateless-function

  if (items !== false) {
    return <List items={items} component={RepoListItem} />
  } else {
    return (<div></div>);
  }

}

HorseList.propTypes = {

};

export default HorseList;
