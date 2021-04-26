let product = require('../data/product')
let profile = require('../data/profile')

let controller = {
    index: function (req, res){
        res.render('index', {'product': product, profile})
    },
}

module.exports = controller;