const { UndefinedEnvVarError } = require('./exceptions');

function getEnv(variable) {
  if (variable in process.env) return process.env[variable];
  else throw new UndefinedEnvVarError(variable);
}

module.exports = {
  getEnv
};
