let profile = require('../data/profile')
let controller = {
    index: function (req, res){
        res.render('product', {'product': profile})
    },
    add: function (req, res){
    res.render('product-add', {'product-add': profile})
        },
    results: function (req, res){
    res.render('search-results', {'search-results': profile})
        }
}

module.exports = controller;