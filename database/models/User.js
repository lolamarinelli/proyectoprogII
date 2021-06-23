module.exports = (sequelize, dataTypes)=>{

    let alias = 'User';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING 
        },
        image :{
            type: dataTypes.STRING
        },
        fecha :{
            type: dataTypes.DATE
        }, 
        seguidores :{
            type: dataTypes.INTEGER
        },
        comentarios :{
            type: dataTypes.INTEGER
        },

    };
    let config = {
        tableName: "users",
        timestamps: true,
        underscored: true
    }

    const User = sequelize.define(alias, cols, config)
    User.associate = (models) => {
        // Relacion
        User.hasMany(models.Comentario, {
         as: 'comentario', 
         foreignKey: 'users_id'
     })
     User.hasMany(models.Product, {
        as: 'product', 
        foreignKey: 'users_id'
    }) 
    }

    return User;

}
