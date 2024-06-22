var express = require('express');
var router = express.Router();
const { body } = require('express-validator');
const db = require('../database/models');
const bcrypt = require("bcryptjs");
const session = require('express-session')
const usersControllers = require("../Controllers/usersControllers");

let validationsLogin = [
    body('mail')
    .notEmpty().withMessage('Debes completar el mail.').bail()
    .isEmail().withMessage('Debe ser un email valido').bail()
    .custom(function(value, {req}){
            return db.Usuario.findOne({where: { mail: req.body.mail },})
                  .then(function(user){
                        if(user != undefined){ 
                            return true;
                        }
                        else{
                            throw new Error ('No existe este email')
                        }
                  })
       }),

    body('contrasenia')
    .notEmpty().withMessage('Debes completar la contraseña.').bail()
    .custom(function(value, {req}){
            return db.Usuario.findOne({where: { mail: req.body.mail },})
                  .then(function(result){
                        if(result != undefined){ 

                            let check = bcrypt.compareSync(req.body.contrasenia, result.contrasenia);
                            if(!check){
                                throw new Error ('La contraseña es incorrecta')
                            }
                        }
                        else{
                            throw new Error ('Este mail no coincide, registrese')
                        }
                  })

        })
]

let validationsRegister = [
    body('mail')
    .notEmpty().withMessage('El campo Mail es obligatorio.').bail()
    .isEmail().withMessage('Debe ser un email valido').bail()
    .custom(function(value){
        return db.Usuario.findOne({where: { mail: value }})
              .then(function(user){
                    if(user == undefined){ 
                        return true;
                    }
                    else{
                        throw new Error ('El email ya existe')
                    }
              })
    }),

    
    body('usuario')
    .notEmpty().withMessage('Por favor, introduzca un nombre de usuario'),
    
    body('contrasenia')
    .notEmpty().withMessage('Debes completar la contraseña.').bail()
    .isLength({ min: 4 }).withMessage('La contraseña debe tener más de 4 caracteres')
]

/* GET INFO */
router.get("/", usersControllers.users);
router.get("/login", usersControllers.login);
router.post("/login", validationsLogin, usersControllers.loginPost);
router.get("/register", usersControllers.register);
router.post("/register", validationsRegister, usersControllers.registerPost);
router.get("/profile", usersControllers.profile);
router.get("/usersEdit", usersControllers.usersEdit);
//router.post('/logout', usersControllers.logout);

module.exports = router;
