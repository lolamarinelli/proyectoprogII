const db = require('../database/models')
const product = db.Product
const comentario = db.Comentario
const op = db.Sequelize.Op
const bcrypt = require('bcryptjs') 

let controller = {
    show: (req, res)=>{
        let primaryKey = req.params.id;
        product.findByPk(primaryKey, {
            include: [{association: 'user'},{association:'comentario', include:[{association:'user'}]}],
        })
            .then(product => res.render('product', {product}))  
            .catch( err => console.log(err))
    },
    add: (req, res)=>{
        product.findAll({
            include: [{association: 'user'}, {association: 'comentario'}]
        })
            .then(product => res.render('product-add', {product})) 
            .catch( err => console.log(err))
    },
    store: (req, res)=>{
        let errors = {}
        if(req.body.modelo == ''){
            errors.register = 'El modelo no puede estar vacío'
            res.locals.errors = errors
            return res.render('product-add')
        }else if (req.body.descripcion == ''){
            errors.register = 'La descripción no puede estar vacía'
            res.locals.errors = errors
            return res.render('product-add')
        }else{
            let product = {
                modelo: req.body.modelo,
                descripcion: req.body.descripcion,
                image: `/images/products/${req.file.filename}`,
                user_id: req.session.user.id
                
            } 
            db.Product.create(product)
                .then(() => res.redirect('/'))
                .catch(err => console.log(err))
        }   
    },
    comentarios: (req, res)=>{
        if(req.session.user == undefined){
            return res.redirect('/users')
        }else{
            let comentarios = {
                comentario: req.body.comentario,
                user_id: req.session.user.id,
                product_id: req.params.id
            }
            db.Comentario.create(comentarios)
                .then(() => res.redirect(`/product/products/${req.params.id}`))
                .catch(err => console.log(err))
        }
    },
    edit: (req, res)=>{
        let primaryKey = req.params.id;
        product.findByPk(primaryKey,  {
            include: [{association: 'comentario'}, {association: 'user'}]
        })
            .then(resultados => res.render('product-edit', { resultados }))
            .catch(err => console.log(err))
    }, 
    update: (req, res)=>{   
        let primaryKey = req.params.id;
        let productoActualizar = req.body
        product.update(
            productoActualizar, {where: {id: primaryKey}}
        )
            .then(()=> res.redirect(`/product/products/${req.params.id}`))
            .catch(err => console.log(err))
    },
    borrar: (req, res)=>{
        let primaryKey = req.params.id;
        product.findByPk(primaryKey)
            .then(resultados => {
                if(req.session.user == undefined){
                    return res.redirect(`/product/products/${primaryKey}`)
                }else if(req.session.user.id == resultados.user_id){
                    db.Comentario.destroy({where: {product_id: primaryKey}})
                    .then(()=>
                        product.destroy({where: {id: primaryKey}})
                        .then(()=> res.redirect('/'))
                    )
                }else{
                    return res.redirect('/')
                }
            })
            .catch(err =>console.log(err))
    },
}

module.exports = controller;