var express = require('express');
var router = express.Router();
var db = require('../db');

const crypto = require('crypto');
const decipher = crypto.createDecipher('aes256', 'asaadsaad');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.get().collection('lab1').findOne({}, function(err, doc){
    if(err) console.log(err);
    console.log(doc);
    var encrypted = doc.message;
    var message = decipher.update(encrypted, 'hex', 'utf8') + decipher.final('utf8');
    res.render('index', { title: 'MongoDB Example', message: message });
  });
});

module.exports = router;
