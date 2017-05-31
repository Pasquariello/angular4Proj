var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
//page being rendered
        res.render('index');
});

module.exports = router;
