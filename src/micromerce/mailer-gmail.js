const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
const credentials = require('../../gmailSettings.json');

exports.transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    xoauth2: xoauth2.createXOAuth2Generator(credentials)
  }
});
