import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import rootReducer from './reducers'
import { Provider } from 'react-redux';

import {Router, Route, browserHistory} from 'react-router';

import App from './components/App'
import MoviePage from './containers/MoviePage'
import MoviesShow from './containers/MoviesShow'
import MoviesNew from './containers/MoviesNew'

const store = createStore(rootReducer);

ReactDOM.render(
  (<Provider store={store} >
    <Router history={browserHistory} >
      <Route path="/" component={App} >
        <Route path='/movies' component={MoviePage} >
          <Route path="/movies/new" component={MoviesNew} />
          <Route path="/movies/:id" component={MoviesShow} />
        </Route>
      </Route>
    </Router>
  </Provider>),
document.getElementById('container'));
