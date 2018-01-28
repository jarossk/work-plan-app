const path = require('path');
const fs = require('fs');
const express = require('express');
const router  = express.Router();

function readF() {

}

router.get('/content', (req, res) => {
    fs.readFile(path.resolve(__dirname, '../../tmp/hello.txt'), { encoding: 'utf8' }, (err, content) => {
        if (err) return console.log(err);
         let dataArray = [];
         let convJson = {
            _data: ""
         };
        convJson._data = content;
        dataArray.push(convJson);
        console.log(dataArray);
        res.json(dataArray);
    });
});

module.exports = router;