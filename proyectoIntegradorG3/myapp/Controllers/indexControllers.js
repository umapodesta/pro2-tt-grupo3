const db = require ("../db/database");

const indexControllers = {
    index : function (req, res) {
        return res.render ('index', {title: "Index", productos: db.productos});
    },

    results : function (req, res) {
        return res.render ('Search Results', {title: "Search Results", productos: db.productos});
    }
}

module.exports = indexControllers;