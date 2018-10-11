/**
 * Created by yang on 2018/10/9.
 */
let express = require('express');
let router = express.Router();

router.get('/', function (req, res, next) {
    res.send('yyh');
});

exports.router = router;