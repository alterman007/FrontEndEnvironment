import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

function Hello({ name }) {
  return <div>Hello {name}</div>;
}
Hello.propTypes = {
  name: PropTypes.string.isRequired,
};
ReactDOM.render(
  <Hello name="world" />,
  document.getElementById('container')
);
