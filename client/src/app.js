import React from 'react';
import ReactDOM from 'react-dom';
import TeamContainer from './containers/TeamContainer.jsx';

window.onload = function(){
  ReactDOM.render(
    <TeamContainer />,
    document.getElementById('app')
  );
}
