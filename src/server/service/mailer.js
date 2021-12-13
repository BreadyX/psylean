const ejs = require('ejs');
const path = require('path');

const Mailer = require('../config/mailer');
const { hostURL } = require('../../globals');

const templates = path.join(__dirname, '../', 'mailTemplates');
const logoURL = new URL('/static/logo.svg', hostURL);

async function sendVerificationEmail(email, code) {
  code = encodeURIComponent(code);
  const verifyURL = new URL(`/users/verify?u=${code}`, hostURL);
  const html = await ejs.renderFile(
    path.join(templates, 'verify.ejs'),
    {
      verifyLink: verifyURL.href,
      logoSrc: logoURL.href
    },
    { async: true }
  );

  // TODO add html-to-text
  await Mailer.sendMail({
    to: email,
    subject: 'La tua mail di verifica di Psylean',
    html: html
  });
}

module.exports = {
  sendVerificationEmail
};
