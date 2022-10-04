const { connect, connection } = require('mongoose');

connect('mongodb://localhost:27017/thoughtsAndResponses', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
