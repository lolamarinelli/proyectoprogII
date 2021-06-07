const db = require('../database/models');
const movie = db.Movie;

const op = db.Sequelize.Op;


let moviesController = {
    index: (req, res)=>{
        movie.findAll()
            .then((resultados)=> res.render('movies', { resultados }))
            .catch((err)=> `Error: ${err}`)
    },
    show: (req, res)=>{
        let primaryKey = req.params.id;
        movie.findByPk(primaryKey, {
            include: [{association: 'genre'}, {association: 'actors'}]
        })
            .then(resultados => res.render('movie', {resultados}))
            .catch( err => console.log(err))

    },
    search: (req, res)=>{
        let searchDatad = req.query.search;
        movie.findAll({
            where: [
                { title: {[op.like]: `%${searchDatad}%`}}
            ]
        })
            .then(resultados => res.render('searchResults', { resultados }))
            .catch(err=> console.log(err))
        
    },
    add: (req, res)=>{
        return res.render('movieAdd')
    },
    store: (req, res)=>{
        
        let movie = {
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            length: req.body.length,
            genre_id:req.body.genre_id
        } 

        db.Movie.create(movie)
        //return res.redirect('/movies')
            .then(() => res.redirect('/movies'))
            .catch(err => console.log(err))
    },
    borrar: (req, res)=>{
        let primaryKey = req.params.id;
        movie.destroy({
            where: {
                id: primaryKey
            }
        })
        .then(()=> res.redirect('/movies'))
        .catch(err=> console.log(err))
    },
    destroy: (req, res)=>{
        let primaryKey = req.params.id;
        //console.log(primaryKey);
         movie.destroy({
            where: {
                id: primaryKey
            }
        })
        .then(()=> res.redirect('/movies'))
        .catch(err=> console.log(err))
    },
    edit: (req, res)=>{
        let primaryKey = req.params.id;
        movie.findByPk(primaryKey)
            .then(resultados => res.render('movieEdit', { resultados }))
            .catch(err => console.log(err))
    }, 
    update: (req, res)=>{   
        let primaryKey = req.params.id;
        let peliculaActualizar = req.body
        movie.update(
            peliculaActualizar, 
            {
                where: {
                    id: primaryKey
                }
            }
        )
            .then(()=> res.redirect('/movies'))
            .catch(err => console.log(err))
    }
/*    
    sql : (req, res)=>{
        db.sequelize.query("SELECT * FROM movies")
            .then((resultados)=>{
                //console.log(resultados[0])
                let peliculas = resultados[0];
                return res.render('sql', {peliculas})
            })
            .catch((error)=> console.log(`Error : ${error}`))
        
    }, 
*/     
}

module.exports = moviesController;