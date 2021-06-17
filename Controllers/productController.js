const db = require('../database/models')
const product = db.Product
const user = db.User
const comentarios = db.Comentario
const op = db.Sequelize.Op
const bcrypt = require('bcryptjs') 

let controller = {
    show: (req, res)=>{
        let primaryKey = req.params.id;
        product.findByPk(primaryKey, {
            include: [{association: 'comentario'}]
        })
            .then(resultados => res.render('product', {resultados}))
            .catch( err => console.log(err))
    },
    id: function(req, res){
       let ids = req.params.id
        let resultado = {};
        for (let i = 0; i < product.length; i++) {
           if (product[i].id == ids){
                resultado = product[i];
            }            
        }
    //    res.render("product", {product, user, comentarios})
    },
    add: (req, res)=>{
        return res.render('product-add')
    },
    store: (req, res)=>{
        let product = {
            modelo: req.body.modelo,
            descripcion: req.body.descripcion,
            image: req.body.image,
            // comentarios: req.body.comentarios, //no se si va
            // fecha: req.body.fecha, //no se si va
        } 

        db.Product.create(product)
        //return res.redirect('/movies')
            .then(() => res.redirect('/profile'))
            .catch(err => console.log(err))
    },
    // borrar: (req, res)=>{
    //     let primaryKey = req.params.id;
    //     product.destroy({
    //         where: {
    //             id: primaryKey
    //         }
    //     })
    //     .then(()=> res.redirect('/profile'))
    //     .catch(err=> console.log(err))
    // },
    // destroy: (req, res)=>{
    //     let primaryKey = req.params.id;
    //     //console.log(primaryKey);
    //      product.destroy({
    //         where: {
    //             id: primaryKey
    //         }
    //     })
    //     .then(()=> res.redirect('/profile'))
    //     .catch(err=> console.log(err))
    // }, 
}

module.exports = controller;