const db = require('../database/models')
const product = db.Product
const user = db.User
const comentarios = db.Comentario
const op = db.Sequelize.Op
const bcrypt = require('bcryptjs') 

let controller = {
  /* product: function (req, res){
        res.render('product', {product, user, comentario})
    },
    add: function (req, res){
        res.render('product-add', {product, user, comentario})
    },
    results: function (req, res){
        res.render('search-results', {product, user, comentario})
    }, */ 
    index: (req, res)=>{
        product.findAll()
            .then((resultados)=> res.render('profile', { resultados }))
            .catch((err)=> `Error: ${err}`)
    },
    id: function(req, res){
       let ids = req.params.id
        let resultado = {};
        for (let i = 0; i < product.length; i++) {
           if (product[i].id == ids){
                resultado = product[i];
            }            
        }
       res.render("product", {product, user, comentarios})
    },
    /* search: (req, res)=>{
        let searchDatad = req.query.search;
        product.findAll({
            where: [
                { title: {[op.like]: `%${searchDatad}%`}}
            ]
        })
            .then(resultados => res.render('search-results', { resultados }))
            .catch(err=> console.log(err))
        
    },
    add: (req, res)=>{
        return res.render('product-add')
    },
    store: (req, res)=>{
        
        let product = {
            modelo: req.body.modelo,
            descripcion: req.body.descripcion,
            image: req.body.image,
       
        } 

        db.Product.create(product)
        //return res.redirect('/movies')
            .then(() => res.redirect('/profile'))
            .catch(err => console.log(err))
    },
    borrar: (req, res)=>{
        let primaryKey = req.params.id;
        product.destroy({
            where: {
                id: primaryKey
            }
        })
        .then(()=> res.redirect('/profile'))
        .catch(err=> console.log(err))
    },
    destroy: (req, res)=>{
        let primaryKey = req.params.id;
        //console.log(primaryKey);
         product.destroy({
            where: {
                id: primaryKey
            }
        })
        .then(()=> res.redirect('/profile'))
        .catch(err=> console.log(err))
    }, */
}

module.exports = controller;