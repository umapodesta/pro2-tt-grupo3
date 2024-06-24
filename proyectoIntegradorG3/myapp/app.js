const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const { body, validationResult } = require('express-validator'); // Importamos express-validator
const db = require("./database/models")

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const patitosRouter = require('./routes/patitos');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Configura la sesión
app.use(session({
  secret: 'Nuestro mensaje secreto',
  resave: false,
  saveUninitialized: true,
}));

// Middleware para cargar usuario desde la sesión o la cookie
app.use( async function(req, res, next) {
  if (req.session.usuario) {
    res.locals.usuario = req.session.usuario;
  } else if (req.cookies.userId && !req.session.usuario) {
    let id = req.cookies.userId;
    db.Usuario.findByPk(id)
      .then(function(usuario) {
        if (usuario) {
          req.session.usuario = usuario;
          res.locals.usuario = usuario;
        }
        next();
      })
      .catch(function(error) {
        console.log(error);
        next();
      });
  } else {
    next();
  }
});

app.use('/', indexRouter);
app.use('/users', usersRouter); // Ruta para manejar usuarios
app.use('/patitos', patitosRouter);

// Ruta para registrar un nuevo usuario
app.post('/users/register', async (req, res, next) => {
  try {
    // Aquí deberías insertar el nuevo usuario en la base de datos
    // Luego de registrar con éxito
    alert('¡Registro exitoso! Por favor, inicia sesión para continuar.');

    // Redirigir al usuario a la página de inicio de sesión después de 3 segundos
    setTimeout(function() {
      res.redirect('/users/login'); // Reemplaza '/users/login' con la ruta correcta a tu página de inicio de sesión
    }, 3000); // 3000 milisegundos (3 segundos) antes de redirigir
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).send('Error interno del servidor');
  }
});

// Captura de errores 404 y manejo de errores
app.use(function(req, res, next) {
  next(createError(404));
});

// Manejador de errores
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
