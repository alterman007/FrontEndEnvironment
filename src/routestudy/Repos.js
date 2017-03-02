import React, { Component } from 'react';
import NavLink from './NavLinks';

export default class Repos extends Component {
  static props = {
    children: React.PropTypes.object,
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <h2>this is Repos</h2>
        <ul>
          <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react">React</NavLink></li>
        </ul>
        {children}
      </div>
    );
  }
}
