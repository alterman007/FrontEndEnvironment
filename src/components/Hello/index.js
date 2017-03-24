import React, { PropTypes } from 'react';

export default function Hello({ name = 'world' }) {
  return <h1>Hello {name}</h1>;
}
Hello.propTypes = {
  name: PropTypes.string,
};

function fetchData(val) {
  return new Promise((res) => {
    setTimeout(() => {
      res(val);
    }, 1000);
  });
}
export {
  fetchData,
};

