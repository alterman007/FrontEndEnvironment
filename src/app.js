import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class Hello extends Component {
  static propTypes = {
    name: PropTypes.string,
  }
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name || 'world',
    };
  }
  handleChange = (ev) => {
    this.setState({
      name: ev.target.value,
    });
  }
  render() {
    const { name = 'world' } = this.state;
    return (
      <div>
        <input value={name} onChange={this.handleChange} />
        <h1>Hello {name}</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <Hello />,
  document.getElementById('container')
);
