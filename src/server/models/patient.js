const mongoose = require('mongoose');
const { regex } = require('../../globals');

const p = new mongoose.Schema({
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    index: true,
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

module.exports = mongoose.model('Patient', p);
