function curry(func, len) {
  const funcArgsLen = typeof len === 'undefined' ? func.length : len;
  const curryFunc = (function newCurryFunc(collectedArgs) {
    return (...args) => {
      const newCollectedArgs = [...collectedArgs, ...args];
      return newCollectedArgs.length >= funcArgsLen
        ? func(...newCollectedArgs)
        : newCurryFunc(newCollectedArgs);
    };
  }([]));
  return curryFunc;
}
export default curry;
