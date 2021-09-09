import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

var overview = product => {
  return product.description;
}

ReactDOM.render( <App/>, document.getElementById('app'));