module.exports = function (sequelize, dataTypes) {
    let alias = "Usuario"; //Este alias se busca como nombre en de la tabla en plural dentro de la base de datos.
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
        mail:{
            type: dataTypes.STRING
        },
        usuario: {
            type: dataTypes.STRING
        },
        contrasenia: {
            type: dataTypes.STRING
        },
        fechaNacimiento: {
            type: dataTypes.DATE
        },
        numeroDocumento: {
            type: dataTypes.INTEGER
        },
        foto: {
            type: dataTypes.STRING
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
        tableName: "usuarios",
        timestamps:true,
        underscored: false
    };

    let Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function (models) {
        Usuario.hasMany(models.Patito , {
            as: "patitos",
            foreignKey: "idUsuario"
        });
        Usuario.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "idUsuario",
          });

    
    };
    return Usuario;
};