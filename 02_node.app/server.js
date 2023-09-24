
const express = require('express');

const app = express();

const path = require('path');

const { getHomePage } = require('./helpers/route-helper')

const port = 7000;

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', getHomePage);

app.listen(port, () => console.log("Server Started On Port", port));