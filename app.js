const express = require('express');
const config = require('config');

const PORT = config.get('port') || 5000;

const app = express();

app.get('/', (req, res) => {
   console.log('work')
});


app.listen(PORT, () => {
    console.log(`App has been! ${PORT}`)
});