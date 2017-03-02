import React, { Component, PropTypes } from 'react';
// import { IndexLink } from 'react-router';
import NavLink from './NavLinks';

import './style.css';
export default class Index extends Component {
  static propTypes = {
    children: PropTypes.object,
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <h1>this is React Router</h1>
        <ul>
          {/* <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li> */}
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
        {children}
      </div>
    );
  }
}
