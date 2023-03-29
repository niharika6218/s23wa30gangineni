var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    let x = Math.random();
    if (req.query.x != undefined) {
        x = req.query.x;
    }

    res.render('computation', { x:x, fround:Math.fround(x), random:Math.random(x), round:Math.round(x)  });
});

module.exports = router;	