const db = require('../database/models')
const product = db.Product
const user = db.User
const comentario = db.Comentario
const op = db.Sequelize.Op
const bcrypt = require('bcryptjs') 

let controller = {
    product: function (req, res){
        res.render('product', {product, user, comentario})
    },
    add: function (req, res){
        res.render('product-add', {product, user, comentario})
    },
    results: function (req, res){
        res.render('search-results', {product, user, comentario})
    },
    id: function(req, res){
       let ids = req.params.id
        let resultado = {};
        for (let i = 0; i < product.length; i++) {
           if (product[i].id == ids){
                resultado = product[i];
            }            
        }
       res.render("product", {product, user, comentario})
    },
}

module.exports = controller;