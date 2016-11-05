module.exports = function (env) {
  switch (env) {
    'PRODUCTION': return 80;
    'production': return 80;
    default: return 3000;
  }
}
