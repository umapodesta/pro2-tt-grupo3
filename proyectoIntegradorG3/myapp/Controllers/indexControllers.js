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
       /* return res.render ('searchResults', {title: "Search Results", productos: db.productos}); */
       db.Usuario.findOne()
        .then(function(results){
            return res.render('searchResults', {title:"Search Results", usuario: results});
        })
        .catch(function(respuestaNegativa){
            console.log(respuestaNegativa);
        });
    }
}


module.exports = indexControllers;