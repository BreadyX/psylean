const mongoose = require('mongoose');
const { regex } = require('../globals');

const p = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Doctor'
  },
  name: {
    type: String,
    required: true,
    match: regex.name,
    maxlength: 144,
    trim: true
  }
});

module.exports = {
  schema: p,
  model: mongoose.model('Patient', p)
};
