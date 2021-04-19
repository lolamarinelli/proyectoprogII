let product = require('../data/product')
let profile = require('../data/profile')

let controller = {
    index: function (req, res){
        res.render('product', {'product': product, profile})
    },
    add: function (req, res){
    res.render('product-add', {'product': product, profile})
        },
    results: function (req, res){
    res.render('search-results', {'product': product, profile})
        }
}

module.exports = controller;