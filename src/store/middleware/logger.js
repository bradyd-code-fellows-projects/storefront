const logger = (store) => (next) => (action) => {
  console.log('__action__', action);
  return next(action);
}

export default logger;