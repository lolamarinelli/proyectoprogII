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
        // chequear Foreign Keys
        product_id: {
            type: dataTypes.INTEGER
        },
        users_id: {
            type: dataTypes.INTEGER
        },
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
   Comentario.associate = (models) => {
       Comentario.belongsTo(models.Product, {
           as: "product",
           foreignKey: "product_id"
       })
       Comentario.belongsTo(models.User,{
           as: "users",
           foreignKey: "users_id"
       })

   }

    return Comentario;
    
};