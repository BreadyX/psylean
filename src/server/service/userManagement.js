const mongoose = require('mongoose');
const mongodb = require('mongodb');

const { ValidationError } = require('../exceptions');

const Doctor = require('../models/doctor');
const mailer = require('./mailer');

async function addDoctor(rawData) {
  const newDoc = new Doctor();

  newDoc.email = rawData.email;
  newDoc.name = rawData.name;
  newDoc.job = rawData.job;
  newDoc.region = rawData.region;
  newDoc.registerNumber = rawData.registerNumber;
  await newDoc.setPassword(rawData.password);
  const verifyCode = await newDoc.genVerifyCode();

  try {
    await newDoc.save();
  } catch (err) {
    console.log(err);
    if (err instanceof mongoose.Error.ValidationError)
      throw ValidationError.fromMongooseValidationError(err);
    else if (err instanceof mongodb.MongoServerError && err.code === 11000)
      throw ValidationError.fromMongoServerError(err);
    else throw err;
  }
  await mailer.sendVerificationEmail(newDoc.email, verifyCode);
}

async function verifyAccount(code) {
  const doc = await Doctor.findOne({ verifyCode: code });
  doc.emailVerified = true;
  await doc.save();
}

module.exports = {
  addDoctor,
  verifyAccount
};
