const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const { getEnv, regex } = require('../../globals');

const SALT_ROUNDS = getEnv('SALT_ROUNDS', 10);

const doc = new mongoose.Schema({
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
    index: {
      expireAfterSeconds: 60 * 60 * 24, // 1d
      partialFilterExpression: {
        emailVerified: false
      }
    }
  },
  verifyCode: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: regex.email,
    maxlength: 128,
    trim: true
  },
  _password: {
    type: String,
    required: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    match: regex.name,
    maxlength: 144,
    trim: true
  },
  job: {
    type: String,
    required: true,
    lowercase: true,
    enum: ['psichiatra', 'psicologo']
  },
  region: {
    type: String,
    required: true,
    lowercase: true,
    enum: [
      'abruzzo',
      'basilicata',
      'calabria',
      'campania',
      'emilia-romagna',
      'friuli-venezia giulia',
      'lazio',
      'liguria',
      'lombardia',
      'marche',
      'molise',
      'piemonte',
      'puglia',
      'sardegna',
      'sicilia',
      'toscana',
      'trentino-alto adige',
      'umbria',
      "valle d'aosta",
      'veneto'
    ]
  },
  registerNumber: {
    type: Number,
    required: true
  },
  emailVerified: {
    type: Boolean,
    default: false
  },
  infoVerified: {
    type: Boolean,
    default: false
  }
});

doc.methods.genVerifyCode = async function () {
  return new Promise((resolve) => {
    const c = uuidv4();
    this.verifyCode = c;
    resolve(c);
  });
};

doc.virtual('password').get(function () {
  return this._password;
});
doc.methods.setPassword = async function (pw) {
  if (pw.length < 8)
    this.invalidate('_password', 'must be at least 8 characters', pw, 'length');
  else this._password = await bcrypt.hash(pw, SALT_ROUNDS);
};

module.exports = mongoose.model('Doctor', doc);
