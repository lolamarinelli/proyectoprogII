module.exports = (sequelize, dataTypes)=>{

    let alias = 'Comentario';
    let cols = {
            id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        comentario: {
            type: dataTypes.STRING 
        },
        fecha :{
            type: dataTypes.DATE
        },
        // Falta agregar product_id y users_id --> foreign keys
        created_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
    };

   let config = {
       tableName: "comentarios",
       timestamps: false,
       underscored: true,
   }
   const Comentario = sequelize.define(alias, cols, config)
    return Comentario;
    
};