const express    = require('express');
const bodyParser = require('body-parser');
const path       = require('path');
const fs         = require('fs');
const morgan     = require('morgan');
const app        = express();
const server     = require('http').Server(app);

const PORT = process.env.PORT || '3000';
app.set('port', PORT);

//const api = require('./server/routes/api');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'dist')));
//app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

server.listen(PORT, () => console.log(`Running on localhost:${PORT}`));

