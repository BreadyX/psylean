const mongoose = require('mongoose');

const app = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    index: true,
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
    index: true,
    unique: true,
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

module.exports = mongoose.model('Appointment', app);
