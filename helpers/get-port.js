module.exports = function (env) {
  switch (env) {
    case 'PRODUCTION': return 80;
    case 'production': return 80;
    default: return 3000;
  }
}
