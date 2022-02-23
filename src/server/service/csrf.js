const { getEnv } = require('../../globals');
const csurf = require('csurf');

if (getEnv('NODE_ENV') == 'production') {
  module.exports = csurf({ cookie: true });
} else {
  module.exports = function (req, _1, next) {
    console.warn('CSRF protection disabled');
    req.csrfToken = () => {};
    next();
  };
}
