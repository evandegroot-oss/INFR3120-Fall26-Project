var express = require('express');
var router = express.Router();
var tasks = [];

// GET home page.
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home', tasks: tasks });
});

// GET home page.
router.get('/home', function(req, res, next) {
    res.render('index', { title: 'Home', tasks: tasks });
});

// POST create task.
router.post('/tasks/create', function(req, res, next) {
    var newTask = {
        title: req.body.title,
        description: req.body.description,
        dueDate: req.body.dueDate,
        priority: req.body.priority,
        status: 'Pending'
    };

    tasks.push(newTask);

    res.redirect('/home');
});

module.exports = router;