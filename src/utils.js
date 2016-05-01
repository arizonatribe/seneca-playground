const actionLog = (err, data) => {
  if (err) {
    return console.error(err);
  }
  console.log(data);
},
pluginInit = (msg, respond) => {
  console.log('plugin initialized');
  respond();
},
titleCase = (str) => str.replace(/\b\w+\b/g, word => (
  `${word.charAt(0).toUpperCase()}${word.substr(1).toLowerCase()}`)
);

export {actionLog, pluginInit, titleCase};