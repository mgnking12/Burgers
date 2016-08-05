/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var burg = require('../models/burg.js');

router.get('/', function(req, res) {
    res.redirect('/burgs')
});

router.get('/burgs', function(req, res) {
    burg.all(function(data) {
        var hbsObject = {
            burgs: data
        }
        console.log(hbsObject)
        res.render('index', hbsObject);
    });
});

router.post('/burgs/create', function(req, res) {
    burg.create(['name', 'devoured'], [req.body.name, req.body.devoured], function(data) {
        res.redirect('/burgs')
    });
});

router.put('/burgs/update/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;

    console.log('condition', condition);

    burg.update({
        'devoured': req.body.devoured
    }, condition, function(data) {
        res.redirect('/burgs');
    });
});

router.delete('/burgs/delete/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;

    burg.delete(condition, function(data) {
        res.redirect('/burgs');
    });
});

module.exports = router;