const mongoose = require('mongoose');

const app = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Patient'
  },
  type: {
    type: String,
    required: true,
    lowercase: true,
    enum: ['online', 'physical']
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true,
    validate: {
      validator: function (value) {
        if (value < this.startDate)
          throw new Error('endDate cannot be before startDate');
      },
      message: function (props) {
        return props.reason.message;
      }
    }
  },
  paymentType: {
    type: String
  },
  paymentAmount: {
    type: Number,
    min: 0
  }
});

module.exports = {
  schema: app,
  model: mongoose.model('Appointment', app)
};
