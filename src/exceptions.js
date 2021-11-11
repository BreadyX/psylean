class UndefinedEnvVarError extends Error {
  constructor(variable) {
    super('Undefined required env var ' + variable);
    this.name = this.constructor.name;
  }
}

module.exports = {
  UndefinedEnvVarError
};
