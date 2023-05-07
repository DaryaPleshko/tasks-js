require('dotenv').config();

const app = require('./src/app');
const port = process.env.PORT;

app.listen(port, () => console.log(`server is ranning on ${port} port`));