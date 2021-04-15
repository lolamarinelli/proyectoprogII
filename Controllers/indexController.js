let product = require('../data/product')
let controller = {
    index: function (req, res){
        res.render('index', {'index': product})
    },
}

module.exports = controller;