import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import NavLink from './NavLinks';
import './style.css';

export default class Repos extends Component {
  static propTypes = {
    children: PropTypes.object,
  }
  static contextTypes = {
    router: PropTypes.object,
  }
  handleSubmit = (ev) => {
    ev.preventDefault();
    const [{ value: userName }, { value: repo }] = ev.target.elements;
    const path = `/repos/${userName}/${repo}`;
    // browserHistory.push(path);
    this.context.router.push(path);
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <h2>this is Repos</h2>
        <ul>
          <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react">React</NavLink></li>
          <li>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="userName" defaultValue="alterman" />
              <input type="text" placeholder="repo" defaultValue="frone-end" />
              <button type="submit">GO</button>
            </form>
          </li>
        </ul>
        {children}
      </div>
    );
  }
}
