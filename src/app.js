import {
  match,
  replace,
  filter,
  map,
  split,
  reduce,
  join,
  toUpperCase,
  reverse,
  trace,
  prop,
} from './handles';
import compose from './compose';
const CARS = [
  { name: 'Ferrari FF', horsepower: 660, dollar_value: 700000, in_stock: true },
  { name: 'Spyker C12 Zagato', horsepower: 650, dollar_value: 648000, in_stock: false },
  { name: 'Jaguar XKR-S', horsepower: 550, dollar_value: 132000, in_stock: false },
  { name: 'Audi R8', horsepower: 525, dollar_value: 114200, in_stock: false },
  { name: 'Aston Martin One-77', horsepower: 750, dollar_value: 1850000, in_stock: true },
  { name: 'Pagani Huayra', horsepower: 700, dollar_value: 1300000, in_stock: false },
];
const exclaim = (x) => `${x}!`;
const head = (x) => x[0];
const add = (a, b) => a + b;
const last = compose(head, reverse);
const demo1 = compose(prop('in_stock'), last);
const demo2 = compose(prop('name'), head);
const average = reduce(add, 0);
const demo3 = compose(average, map(prop('dollar_value')));
const demo4 = compose(replace(/\W+/g, '_'));
const demo5 = compose(join(', '), map((car) => car.dollar_value.toString()), filter(prop('in_stock')));

console.log(demo1(CARS));
console.log(demo2(CARS));
console.log(demo3(CARS));
console.log(demo4('helo fda 324#$gg '));
console.log(demo5(CARS));


// function Container(x) {
//   this.value = x;
// }
// // a -> Container(x)
// Container.of = function of(x) {
//   return new Container(x);
// };
// // (a -> b) -> Container a -> Container b
// Container.prototype.map = function map(f) {
//   return Container.of(f(this.value));
// };

// function Maybe(x) {
//   this.value = x;
// }
// Maybe.of = function of(x) {
//   return new Maybe(x);
// };
// Maybe.prototype.isNothing = function isNothing() {
//   return this.value === null || this.value === undefined;
// };
// Maybe.prototype.map = function map(f) {
//   return this.isNothing()
//     ? Maybe.of(null)
//     : Maybe.of(f(this.value));
// };

// const res = Maybe.of('mambmambmamb').map((v) => v.match(/a/ig));
// console.log(res);
