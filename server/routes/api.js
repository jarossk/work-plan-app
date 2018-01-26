const path = require('path');
const fs = require('fs');
const express = require('express');
const router  = express.Router();

router.get('/api', (req, res, next) => {
    fs.readFile(path.resolve(__dirname, '../../tmp/hello.txt'), { encoding: 'utf8' }, (err, content) => {
        if (err) return console.log(err);
        res.json(content);
    });
});

module.exports = router;