const db = require ("../database/models");

const indexControllers = {
    index : function (req, res) {

        

        return res.render ('index', {title: "Index", productos: db.productos});
    },

    results : function (req, res) {
        return res.render ('searchResults', {title: "Search Results", productos: db.productos});
    }
}

module.exports = indexControllers;