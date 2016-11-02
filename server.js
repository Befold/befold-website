const express = require('express');
const port = require('./helpers/get-port');

const ENV = 'development'
const PORT = port(ENV);

const app = express();

app.set('views', [`./views`]);
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use('/public', express.static('public'));
app.use(require('./routes'));

app.listen(PORT, function () {
  console.info(`Web server started on port ${PORT}`);
});
