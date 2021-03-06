const {pluginInit} = require('../utils');

const interject = (phrase) => `${utils.titleCase(phrase)}!`;
const respond = (args, done) => {
  done(null, {interjection: interject(args.cmd)});
};

function Interjections(options) {
  this.add('role:api,cmd:bazinga', respond)
    .add('role:api,cmd:zoinks', respond)
    .add('role:api,cmd:wowsers', respond)
    .add('role:api,cmd:arrrggh', respond)
    .add('role:api,cmd:inconceivable', respond)
    .add('role:api,cmd:frau-blucher', respond)
    .add('role:api,cmd:excellent', respond)
    .add('role:api,cmd:bogus', respond)
    .add('role:api,cmd:dude', respond)
    .add('role:api,cmd:brilliant', respond)
    .add({init: 'interjections'}, utils.pluginInit);
}

module.exports = exports = Interjections;
