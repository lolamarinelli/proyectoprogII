let product = require('../data/product')
let controller = {
    index: function (req, res){
        res.render('product', {'product': product})
    },
    add: function (req, res){
    res.render('product-add', {'product-add': product})
        },
    results: function (req, res){
    res.render('search-results', {'search-results': product})
        }
}

module.exports = controller;