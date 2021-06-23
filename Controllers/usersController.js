const db = require('../database/models')
const product = db.Product
// const comentario = db.Comentario
const users = db.User
const op = db.Sequelize.Op
const bcrypt = require('bcryptjs') 

let controller = {
    //LOGIN
    login: (req, res)=>{
        // Control de acceso
        if(req.session.user != undefined){
            return res.redirect('/')
        } else {
            return res.render('login')
        }
    }, 
    processLogin: (req, res) => {
        // Variable para guardar errores
        let errors = {};

        // Buscar el usuario por medio del mail
        db.User.findOne({
            where: [{ email: req.body.email }]
        })
        .then( (user) => {
            if(user==null){
                console.log("hola")
               errors.login = "Email o la contraseña son incorrectos";
               res.locals.errors = errors;
               return res.render('login') 
            } else if (bcrypt.compareSync(req.body.password, user.password) == false){
                errors.login = "Email o la contraseña son incorrectos";
                res.locals.errors = errors;
               return res.render('login') 
            } else {
                req.session.user = user;
                if(req.body.recordarme != undefined){
                    res.cookie('user_id', user.id, {maxAge: 1000 * 60 * 5}); //chequear si es userId
                }
            }
            return res.redirect('/');
        })
        .catch( err => console.log(err))
    },
    logout: (req, res) => {
        req.session.destroy()
        res.clearCookie('user_id')
        return res.redirect('/users')
    },

    //REGISTER
    register: (req, res)=>{
        // Control de acceso
        if(req.session.user != undefined){
            return res.redirect('/')
        } else {
            return res.render('register')
        }
    }, 
    store: (req, res) => {
        console.log(req.body) 
        let errors = {};
        //chequear los campos obligatorios
        
       if(req.body.email == ""){ // El mail no debe esta vacio
            errors.register = "Email no puede estar vacio"
            res.locals.errors = errors

            return res.render('register')

       } else if (req.body.password == ""){ // El password no este vacio
            errors.register = "Password no puede estar vacio"
            res.locals.errors = errors

            return res.render('register')
       } else if(req.body.repassword == ""){
            errors.register = "Re escribir password no puede estar vacio"
            res.locals.errors = errors

            return res.render('register')
       } else {
           users.findOne({where: [{ email : req.body.email}]})
            .then( user => {
                if(user !==null){
                    errors.register = "Email ya existe"
                    res.locals.errors = errors

                    return res.render('register')
                } else if(req.body.password != req.body.repassword ) {
                    errors.register = "Los password no coinciden"
                    res.locals.errors = errors

                    return res.render('register')
                } else {
                    console.log('Crea el usuario')
                    let user = {
                        nombre: req.body.nombre,
                        apellido: req.body.apellido,
                        email: req.body.email,
                        fecha: req.body.fecha,
                        // profile_photo: 'default.png',
                        password: bcrypt.hashSync(req.body.password, 10),
                        repassword: bcrypt.hashSync(req.body.password, 10),
                        image: req.file.filename
        
                    }
                    users.create(user)
                        .then( user => {
                            return res.redirect('/users')
                        })
                        .catch( err => console.log(err))
                }
                console.log('llego al final')
            })
            .catch( err => {
            console.log(err)
            res.send(err)}) 
        }  
    },

    //PROFILE
    profile: (req, res)=>{
    //     let user_id = req.params.id
    //     product.findAll({
    //         where:[{user_id: {[op.like]:`${user_id}`}}]
    // })
    //         .then((resultados)=> res.render('profile', { resultados }))
    //         .catch((err)=> `Error: ${err}`)
        product.findAll()
            .then((resultados)=> res.render('profile', { resultados }))
            .catch((err)=> `Error: ${err}`)
    },

}

module.exports = controller;