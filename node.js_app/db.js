const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, (err) => {
  if(err) throw err;
  console.log('Successfully connected');
});