const app = require('./app');
const config = require('./config');
const PORT = config.port || 5000;

const server = app.listen(PORT, () => {
  console.log('Server is running on Port', PORT);
});
