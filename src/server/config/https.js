const fs = require('fs');
const path = require('path');

const { getEnv } = require('../../globals');

const privateKey = fs.readFileSync(
  path.resolve(__dirname, '../sslcert', getEnv('SSL_PRIVATE_KEY'))
);
const certificate = fs.readFileSync(
  path.resolve(__dirname, '../sslcert', getEnv('SSL_CERTIFICATE'))
);

module.exports = {
  key: privateKey,
  cert: certificate
};
