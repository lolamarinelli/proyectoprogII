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
        // chequear Foreign Keys
        product_id: {
            type: dataTypes.INTEGER
        },
        user_id: {
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
       timestamps: true,
       underscored: true,
   }
   const Comentario = sequelize.define(alias, cols, config)
   Comentario.associate = (models) => {
    Comentario.belongsTo(models.User,{
        as: "user",
        foreignKey: "user_id"
    })
       Comentario.belongsTo(models.Product, {
           as: "product",
           foreignKey: "product_id"
       })
       

   }

    return Comentario;
    
};