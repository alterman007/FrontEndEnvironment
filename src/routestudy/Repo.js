import React, { Component, PropTypes } from 'react';
let time = 0;
export default class Repos extends Component {
  static propTypes = {
    params: PropTypes.object,
  }
  render() {
    time += 1;
    console.log(time);
    const { params } = this.props;
    console.log(params);
    return (
      <div>
        <h2>Hello {params.repoName}</h2>
      </div>
    );
  }
}
