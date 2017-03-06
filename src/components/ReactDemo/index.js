import React, { PropTypes } from 'react';
import './index.scss';
export default function Hello({ name }) {
  return (
    <div className="demo">
      <h1>react demo</h1>
      <div className="center-block">Hello {name}</div>
    </div>
  );
}
Hello.propTypes = {
  name: PropTypes.string.isRequired,
};
