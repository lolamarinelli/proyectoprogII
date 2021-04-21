let product = require('../data/product')
let profile = require('../data/profile')

let controller = {
    index: function (req, res){
        res.render('index', {'product': product, profile})
    },
    // id: function(req, res){
    //     let ids = req.params.id
    //     let resultados = []
    //     for (let i = 0; i < product.length; i++) {
    //         if (product[i].id == ids){
    //             resultados.push(product[i])  
    //         }            
    //     }
    //     res.render("product", {'product': resultados, profile, product})
    // },
}

module.exports = controller;