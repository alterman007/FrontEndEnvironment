import curry from './curry';
const match = curry((regexp, str) => str.match(regexp));
const replace = curry((regexp, replacement, str) => str.replace(regexp, replacement));
const filter = curry((func, ary) => ary.filter(func));
const map = curry((func, ary) => ary.map(func));
const split = curry((func, str) => str.split(' '));
const reduce = curry((func, initVar, str) => str.reduce(func, initVar));
const join = curry((str, ary) => ary.join(str));
const toUpperCase = curry((str) => str.toUpperCase());
const reverse = reduce((acc, x) => [x].concat(acc), []);
const prop = curry((propName, obj) => obj[propName]);
const trace = reduce((tag, x) => {
  console.log(tag, x);
  return x;
});
export { match, prop, replace, filter, map, split, reduce, join, toUpperCase, reverse, trace };
