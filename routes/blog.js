var express = require('express');
var router = express.Router();
var debug = require('debug')('blog-backend:blog.js');

router.route('/')
    .get( function(req, res){
        debug("Ingresando correctamente a la ruta inicial del blog con GET");
        res.json({mensaje: 'Funciona correctamente'});
    });

module.exports = router;
