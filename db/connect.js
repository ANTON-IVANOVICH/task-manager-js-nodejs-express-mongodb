const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose.connect(url, { // чтобы скрыть сообщения в консоли
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
