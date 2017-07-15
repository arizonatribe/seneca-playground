const {logger} = require('utilitarian/logger');

const actionLog = (err, data) => {
  if (err) {
    logger.error(err);
  } else {
    logger.info(data);
  }
};

const pluginInit = (msg, respond) => {
  logger.info('plugin initialized');
  respond();
};

const titleCase = (str) => str.replace(/\b\w+\b/g, word => (
  `${word.charAt(0).toUpperCase()}${word.substr(1).toLowerCase()}`)
);

Object.assign(exports, {
    actionLog, pluginInit, titleCase
});
