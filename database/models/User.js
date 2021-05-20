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
        productos :{
            type: dataTypes.STRING
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
        timestamps: false,
        underscored: true
    }

    const User = sequelize.define(alias, cols, config)
    return User;

}
