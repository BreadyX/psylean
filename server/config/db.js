const { getEnv } = require('../globals');

const mongoose = require('mongoose');

mongoose.connect(getEnv('MONGODB_CONNECT_STRING')).catch((err) => {
  throw err;
});

const c = mongoose.connection;
c.on('error', () =>
  console.error('Failed to establish a connection to MongoDB')
);
c.on('connecting', () => console.log('Connecting to MongoDB'));
c.once('connected', () => console.log('Connected to MongoDB'));
c.once('disconnected', () => console.log('Lost connection MongoDB!'));
c.once('reconnected', () => console.log('Reconnected to MongoDB'));
