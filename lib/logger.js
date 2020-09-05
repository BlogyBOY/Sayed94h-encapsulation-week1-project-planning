const logger = (() => {

  const logs = [];

  const logger = {
    get logs() {
      return deepClone(logs);
    },
    push: (logEntry) => {
      const entryCopy = deepClone(logEntry);
      logs.push(entryCopy);
    }
  };

  window.onerror = (message, url, lineNumber, columnNumber, err) => {
    logger.push({ err });
  };

  return Object.freeze(logger);

})();

