import nodemailer from 'nodemailer';
import xoauth2 from 'xoauth2';
import credentials from '../../gmailSettings.json';

export const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    xoauth2: xoauth2.createXOAuth2Generator(credentials)
  }
});