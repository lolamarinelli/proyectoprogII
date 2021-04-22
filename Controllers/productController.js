let product = require('../data/product')
let profile = require('../data/profile')
let comentarios = require('../data/comentarios')


let controller = {
    index: function (req, res){
        res.render('product', {'product': product, profile, comentarios})
    },
    add: function (req, res){
        res.render('product-add', {'product': product, profile, comentarios})
    },
    results: function (req, res){
        res.render('search-results', {'product': product, profile, comentarios})
    },
    id: function(req, res){
       let ids = req.params.id
        let resultado = {};
        for (let i = 0; i < product.length; i++) {
           if (product[i].id == ids){
                resultado = product[i];
            }            
        }
       res.render("product", {'product': resultado, profile, comentarios})
    },
}

module.exports = controller;