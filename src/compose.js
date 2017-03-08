function compose(...funcs) {
  switch (funcs.length) {
    case 0:
      return (x) => x;
    case 1:
      return funcs[0];
    default:
  }
  const last = funcs.pop();
  return (...args) => (
    funcs.reduceRight((composed, f) => f(composed), last(...args))
  );
}

export default compose;
