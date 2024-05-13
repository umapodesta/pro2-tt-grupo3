module.exports = function (sequelize, dataTypes) {
    let alias = "Comentarios";
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
        tableName: "Comentarios",
        timestamps:true,
        underscored: false
    };

    let Comentario = sequelize.define(alias, cols, config);

    return Comentario;
};