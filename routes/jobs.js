const express = require('express');
const router = express.Router();
const Job = require('../models/Job');


router.get('/test', (req, res) => {
    res.send('Deu certo');
});


// add job POST

router.post('/add', (req,res) => {

    let { title, salary, company, description, email, new_job } = req.body;

    Job.create({
        title,
        salary,
        company,
        description,
        email,
        new_job
    })
    .then(() => {
        res.redirect('/')
    })
    .catch((e) => {
        console.log(e)
    });

});

module.exports = router;