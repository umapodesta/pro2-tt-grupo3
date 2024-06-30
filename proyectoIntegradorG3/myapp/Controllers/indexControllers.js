const db = require ("../database/models");

const indexControllers = {
    index : function(req, res) {
        db.Patito.findAll({
            include: [{ association: 'usuario' }],
            order: [['createdAt', 'DESC']],
            limit: 10 // Define la cantidad de productos a mostrar según lo que el equipo decida
        })
        .then(function(result) {
            return res.render('index', { productos: result });
        })
        .catch(function(err) {
            console.log(err);
            return res.status(500).send('Error interno del servidor');
        });
    },

    results : function (req, res) {
        let palabraBuscada = req.query.search;
        let filtro= {
            where:{
                producto: {[db.Sequelize.Op.like]: '%'+ palabraBuscada + '%'}
            }
        };
        db.Patito.findAll(filtro)
        .then(function (results) {
            res.render("searchResults", {resultados: results});
        })
        .catch(function (err) {
            console.log(err)
        })
    }
}


module.exports = indexControllers;