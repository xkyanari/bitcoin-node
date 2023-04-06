require('dotenv').config();

const {
  PORT
} = process.env;

const app = require('./app');
const apiRoutes = require('./routes/api');

app.use('/api/v1', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
