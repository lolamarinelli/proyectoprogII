const db = require('../database/models')
const product = db.Product
const profile = db.User
const comentarios = db.Comentario
const op = db.Sequelize.Op
const bcrypt = require('bcryptjs') 

let controller = {
    product: function (req, res){
        res.render('product', {product, profile, comentarios})
    },
    add: function (req, res){
        res.render('product-add', {product, profile, comentarios})
    },
    results: function (req, res){
        res.render('search-results', {product, profile, comentarios})
    },
    id: function(req, res){
       let ids = req.params.id
        let resultado = {};
        for (let i = 0; i < product.length; i++) {
           if (product[i].id == ids){
                resultado = product[i];
            }            
        }
       res.render("product", {product, profile, comentarios})
    },
}

module.exports = controller;