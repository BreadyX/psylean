const mongoose = require('mongoose');
const { regex } = require('../../globals');

const doc = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    match: regex.email,
    maxlength: 128,
    trim: true
  },
  password: {
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

module.exports = mongoose.model('Doctor', doc);
