import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GenreSongs from './GenreSongs';
import AddSong from './AddSong';

import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/genre/:id" component={GenreSongs} />
        <Route path="/addSong" component={AddSong} />
      </Switch>
  </Router>
  </Provider>, 
document.getElementById('root')
);