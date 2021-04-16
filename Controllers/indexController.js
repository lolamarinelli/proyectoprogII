let product = require('../data/product')
let controller = {
    index: function (req, res){
        res.render('index', {'product': product})
    },
}

module.exports = controller;