module.exports = (sequelize, dataTypes)=>{

    let alias = 'Product';
    let cols = {
            id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        modelo: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING
        },
        fecha :{
            type: dataTypes.DATE
        },
        created_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        user_id: {
            type: dataTypes.DATE,
            allowNull: true,
        }
    };

   let config = {
       tableName: "product",
       timestamps: false,
       underscored: true,
   }
   const Product = sequelize.define(alias, cols, config)
   Product.associate = (models) => {
       // Relacion
       Product.hasMany(models.Comentario, {
        as: 'comentario', 
        foreignKey: 'product_id'
    })
    Product.belongsTo(models.User, {
        as: 'user', 
        foreignKey: 'user_id'
    })
   }
    return Product;
    
};