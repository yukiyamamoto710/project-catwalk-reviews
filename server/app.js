const express = require('express')
const app = express();
const PORT = 3000;
const controller = require('../controllers/index.js');

app.use(express.json());

app.use('/reviews', controller);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});