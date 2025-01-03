//importo list.js
const list = require('../data/list');

//setto il router
const express = require("express");
const router = express.Router();

//----------root------------

// index
router.get('/', function (req, res) {
    //res.send('Lista dei post');
    res.json(list);
});

// show
router.get('/:id', function (req, res) {
    const index = parseInt(req.params.id)
    const objId = list.find((element) => index === element.id)
    if (objId) {
        //res.send('Dettagli del post ' + req.params.id);
        res.json(objId);
    } else {
        res.send("Post non esistente!")
    }
});

// store
router.post('/', function (req, res) {
    res.send('Creazione nuovo post');
});

// update
router.put('/:id', function (req, res) {
    res.send('Modifica integrale del post ' + req.params.id);
});

// modify
router.patch('/:id', function (req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
});

// destroy
router.delete('/:id', function (req, res) {
    res.send('Eliminazione del post' + req.params.id);
});

module.exports = router;