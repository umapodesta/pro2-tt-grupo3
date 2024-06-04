module.exports = function (sequelize, dataTypes) {
    let alias = "Patito";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER 
        },
        idUsuario: {
            type: dataTypes.INTEGER
        },
        foto: {
            type: dataTypes.STRING
        },
        producto:{
            type: dataTypes.STRING
        },
        descripcion: {
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
        tableName: "productos",
        timestamps:false,
        underscored: false
    };

    let Patito = sequelize.define(alias, cols, config);

    Patito.associate = function (models) {
        Patito.belongsTo(models.Usuario , {
            as: "usuario",
            foreignKey: "idUsuario"
        });

        Patito.hasMany(models.Comentario, {
            as: "comentario",
            foreignKey: "idProducto"
        });

     };

    // Patito.associate = function (models) {
      //  Patito.belongsTo(models.Comentario , {
        //    as: "comentario",
          //  foreignKey: "idUsuario" //Según luis se pone el id del usuario

        //});

     //};


    return Patito;
};