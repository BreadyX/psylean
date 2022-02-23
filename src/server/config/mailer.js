const { getEnv } = require('../../globals');
const nodemailer = require('nodemailer');

const max_retries = getEnv('SMTP_MAX_RETRIES', 10);
const options =
  getEnv('NODE_ENV') === 'development'
    ? {
        host: 'localhost',
        port: getEnv('SMTP_PORT', 587),
        secure: false
      }
    : {
        host: getEnv('SMTP_HOST'),
        port: getEnv('SMTP_PORT', 587),
        secure: getEnv('SMTP_SECURE', true),
        auth: {
          username: getEnv('SMTP_USERNAME'),
          password: getEnv('SMTP_PASSWD')
        }
      };

// TODO: consider moving from config
class Mailer {
  _transporter;

  constructor(options) {
    this._transporter = nodemailer.createTransport(options);
    this._transporter.verify();

    this._transporter.use('compile', (mail, cb) => this._html2txt(mail, cb));
  }

  get serverEmail() {
    return getEnv('SMTP_MAIL', 'noreply@psylean.com');
  }

  async sendMail(envelope, err) {
    envelope.from = { name: 'Psylean', address: this.serverEmail };
    for (let i = 0; i < max_retries; i++) {
      try {
        await this._transporter.sendMail(envelope, err);
        return;
      } catch (e) {
        console.log('Failed to send email: ', e);
      }
    }
    console.log('Maximum retries exceeded, giving up');
  }

  _html2txt(mail, cb) {
    // TODO: convert html mail using hmtl-to-text
    cb();
  }
}

module.exports = new Mailer(options);
