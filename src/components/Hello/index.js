import React, { PropTypes } from 'react';

export default function Hello({ name = 'world' }) {
  return <h1>Hello {name}</h1>;
}

Hello.propTypes = {
  name: PropTypes.string,
};
