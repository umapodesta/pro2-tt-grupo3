module.exports = function (sequelize, dataTypes) {
    let alias = "Patitos";
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
        createAt: {
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
        tableName: "Patitos",
        timestamps:false,
        underscored: true
    };

    let Patito = sequelize.define(alias, cols, config);

    return Patito;
};