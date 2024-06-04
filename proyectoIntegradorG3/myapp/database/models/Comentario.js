module.exports = function (sequelize, dataTypes) {
    let alias = "Comentario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER 
        },
        idUsuario: {
            type: dataTypes.INTEGER
        },
        idProducto: {
            type: dataTypes.INTEGER
        },
        texto: {
            type: dataTypes.STRING(400)
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },
        deletedAt: {
            type: dataTypes.DATE
        }
    
    };

    let config = {
        tableName: "comentarios",
        timestamps:true,
        underscored: false
    };

    let Comentario = sequelize.define(alias, cols, config);


    Comentario.associate = function(models) {
        Comentario.belongsTo(models.Patito, {
            as: "patitos",
            foreignKey: "idProducto"
        });
    };
    
   // Comentario.associate = function (models) {
     //   Comentario.hasMany(models.Patito , {
       //     as: "patitos",
         //   foreignKey: "idUsuario"
        //});

    
   //};

    return Comentario;
};