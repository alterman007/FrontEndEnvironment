import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Index from './routestudy/Index';
import Home from './routestudy/Home';
import About from './routestudy/About';
import Repos from './routestudy/Repos';
import Repo from './routestudy/Repo';

ReactDOM.render(
  <Router history={hashHistory} >
    <Route path="/" component={Index}>
      <IndexRoute component={Home} />
      <Route path="/about" component={About} />
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo} />
      </Route>
    </Route>
  </Router>,
  document.getElementById('container')
);
