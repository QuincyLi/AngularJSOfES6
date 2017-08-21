import express from 'express';
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express', csrfToken: req.csrfToken() });
});

router.post('/login', function (req, res, next) {
    console.log(req.body);
    req.session.username = req.body.userName;
    if (req.body.userName != '' && req.body.password != '') {
        res.json({ success: 1 });
    }else{
        var err = new Error('Anthentication failed');
        err.status = 500;
        next(err);
    }
});

export default router;