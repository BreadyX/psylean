const { UndefinedEnvVarError } = require('./exceptions');

function getEnv(variable) {
  if (variable in process.env) return process.env[variable];
  else throw new UndefinedEnvVarError(variable);
}

const regex = {
  // courtesy of emailregex.com (HTML regex)
  email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,

  // all names must be 2-6 words long, all words must include an uppercase letter
  // and 1-24 other characters or apostrophe
  name: /^(([A-Z])([a-z'àèìòù]|'[A-Z]){1,24}( )){1,5}(([A-Z])([a-z'àèìòù]|'[A-Z]){1,24})$/
};

module.exports = {
  getEnv,
  regex
};
