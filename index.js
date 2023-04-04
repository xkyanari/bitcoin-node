// index.js
require('dotenv').config();

const app = require('./app');
const apiRoutes = require('./routes/api');

app.use('/api/v1', apiRoutes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
