function getEnv(variable, defaultValue) {
  if (variable in process.env) return process.env[variable];
  else if (defaultValue !== undefined) return defaultValue;
  else throw new TypeError(`${variable} cannot be 'undefined'`);
}

const regex = {
  // courtesy of emailregex.com (HTML regex)
  email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,

  // all names must be 2-6 words long, all words must include an uppercase letter
  // and 1-24 other characters or apostrophe
  name: /^(([A-Z])([a-z'àèìòù]|'[A-Z]){1,24}( )){1,5}(([A-Z])([a-z'àèìòù]|'[A-Z]){1,24})$/
};

const hostURL =
  getEnv('NODE_ENV') === 'production'
    ? new URL(`https://${getEnv('HOSTNAME')}`)
    : new URL(`https://localhost:${getEnv('HTTPS_PORT')}`);

module.exports = {
  getEnv,
  hostURL,
  regex
};
