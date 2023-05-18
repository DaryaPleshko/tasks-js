require('dotenv').config();
const app = require('./src/app.js');

const port = process.env.PORT;
app.listen(port, () => console.log('Server is run'));
