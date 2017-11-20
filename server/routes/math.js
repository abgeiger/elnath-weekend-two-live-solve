var express = require('express');
var router = express.Router();

var mathResult = 0;

router.post('/', function(req, res) {
    console.log('router.post hit!');
    var firstNum = parseInt(req.body.firstNum);
    var secondNum = parseInt(req.body.secondNum);

    switch(req.body.operator) {
        case 'add':
            mathResult = firstNum + secondNum;
            break;
        case 'subtract':
            mathResult = firstNum - secondNum;
            break;
        case 'multiply':
            mathResult = firstNum * secondNum;
            break;
        case 'divide':
            mathResult = firstNum / secondNum;
            break;
    }
    
    res.sendStatus(200);
});

router.get('/', function(req, res) {
    res.send({result: mathResult});
});

module.exports = router;