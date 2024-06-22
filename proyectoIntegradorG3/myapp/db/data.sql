CREATE DATABASE IF NOT EXISTS dbProyecto;

USE dbProyecto;

CREATE TABLE IF NOT EXISTS usuarios(
/* 	nombreColumna 		tipoDato 		Restricciones */
    id 					INT 			UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre 				VARCHAR(250) 	NOT NULL,
    apellido 			VARCHAR(250) 	NOT NULL,
    mail 				VARCHAR(250) 	NOT NULL,
    usuario 			VARCHAR(250) 	NOT NULL,
    contrasenia 		VARCHAR(250) 	NOT NULL,
    fechaNacimiento 	DATE 			NOT NULL,
    numeroDocumento 	INT 			NOT NULL,
    foto 				VARCHAR(250) 	NOT NULL,
    createdAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ,
	updatedAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt  			TIMESTAMP		NULL ON UPDATE CURRENT_TIMESTAMP
    
);


INSERT INTO usuarios (id, nombre, apellido, mail, usuario, contrasenia, fechaNacimiento, numeroDocumento, foto) VALUES (default, "Uma", "Podesta", "umapodesta@gmail.com", "umita", "1234", "2005-02-06", 45678789, "uma.png");
INSERT INTO usuarios (id, nombre, apellido, mail, usuario, contrasenia, fechaNacimiento, numeroDocumento, foto) VALUES (default, "Pilar", "Torelli", "pilitorelli@gmail.com", "pilitore", "4567", "2004-12-08", 46360790, "pili.png");
INSERT INTO usuarios (id, nombre, apellido, mail, usuario, contrasenia, fechaNacimiento, numeroDocumento, foto) VALUES (default, "Luis", "Navas", "luis@gmail.com", "luisito", "7890", "1967-09-07", 32456789, "luis.png");
INSERT INTO usuarios (id, nombre, apellido, mail, usuario, contrasenia, fechaNacimiento, numeroDocumento, foto) VALUES (default, "Brian", "Gomez", "brian@gmail.com", "briannnn", "34567", "1967-10-08", 33456789, "brian.png");
INSERT INTO usuarios (id, nombre, apellido, mail, usuario, contrasenia, fechaNacimiento, numeroDocumento, foto) VALUES (default, "Carlos", "casas", "carlos@gmail.com", "carlitos", "456789", "2007-01-09", 50345678, "carlos.png");


CREATE TABLE IF NOT EXISTS productos (
	id 			INT 	UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    idUsuario 	INT 	UNSIGNED,
    foto 		VARCHAR(250) 	NOT NULL,
    producto 	VARCHAR(250) 	NOT NULL,
    descripcion VARCHAR(400) 	NOT NULL,
	createdAt 	TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ,
	updatedAt 	TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt   TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
	FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);

INSERT INTO productos (id, idUsuario, foto, producto, descripcion) VALUES (default, 1, "patodegomaPolicia.jpeg", "Patito policia", "Pato de hule color amarillo con traje de policia azul.");
INSERT INTO productos (id, idUsuario, foto, producto, descripcion) VALUES (default, 2, "ScreenShot2024-04-17at13.16.22.png", "Patito princesa rosada", "Pato de hule color rosado con su corona dorada (inspirado en la artista pop argetinta Martina Stoessel - TINI TINI TINI).");
INSERT INTO productos (id, idUsuario, foto, producto, descripcion) VALUES (default, 3, "ScreenShot2024-04-17at13.18.28.png", "Patito bombero", "Pato de hule amarillo con traje de bombero color negro (incluye manguera y pequeño gorro).");
INSERT INTO productos (id, idUsuario, foto, producto, descripcion) VALUES (default, 4, "freddymercury.jpeg", "Patito Freddy Mercury", "Pato de hule color amarillo del artista Freddy Mercury (incluye microfono y anteojos).");
INSERT INTO productos (id, idUsuario, foto, producto, descripcion) VALUES (default, 5, "ScreenShot2024-04-17at13.19.49.png", "Patito Hombre Araña", "Pato de hule con traje del superheroe Spiderman.");
INSERT INTO productos (id, idUsuario, foto, producto, descripcion) VALUES (default, 1, "comprar-patito-goma-minions.jpeg", "Patito Minion", "Pato de hule color amarillo con traje de minion (incluye guantes y googles).");
INSERT INTO productos (id, idUsuario, foto, producto, descripcion) VALUES (default, 2, "donaldTrump.jpg", "Patito Donald Trump", "Pato de hule color amarillo del presidente Donald Trump.");
INSERT INTO productos (id, idUsuario, foto, producto, descripcion) VALUES (default, 3, "patotoro.jpeg", "Patito toro", "Pato de hule de toro color negro con cuernos blancos.");
INSERT INTO productos (id, idUsuario, foto, producto, descripcion) VALUES (default, 4, "patoJocker.jpg", "Patito Jocker", "Pato de hule del villano Joker con traje incluido.");
INSERT INTO productos (id, idUsuario, foto, producto, descripcion) VALUES (default, 5, "comprar-patito-goma-chewaka.jpeg", "Patito Chewbacca", "Pato de hule del personaje de la saga de Star Wars Chewbacca color marron.");
/* ***** LUNES *****	SQL para Insertar registros 
NOTA: SI NO PUEDES INSERTAR ESTE REGISTRO POR MOTIVO DEL SAVE MODE O EL MODO SEGURO
EDIT -> PREFERENCES -> SQL EDITOR -> SAVE UPDATE = OFF*/

CREATE TABLE IF NOT EXISTS comentarios(
	  id 	 		INT 	UNSIGNED PRIMARY KEY AUTO_INCREMENT,
      idUsuario 	INT 	UNSIGNED,
      idProducto    INT 	UNSIGNED,
      texto 		VARCHAR(400) 	NOT NULL,
      createdAt 	TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ,
	  updatedAt 	TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	  deletedAt   	TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
      FOREIGN KEY   (idUsuario) REFERENCES usuarios(id),
      FOREIGN KEY 	(idProducto) REFERENCES productos(id)
      
);

/* ***** LUNES *****	SQL para Insertar registros 
NOTA: SI NO PUEDES INSERTAR ESTE REGISTRO POR MOTIVO DEL SAVE MODE O EL MODO SEGURO
EDIT -> PREFERENCES -> SQL EDITOR -> SAVE UPDATE = OFF*/




INSERT INTO comentarios (id, idUsuario, idProducto, texto) VALUES (default, 1, 1, "comentario 1 al producto 1");
INSERT INTO comentarios (id, idUsuario, idProducto, texto) VALUES (default, 2, 1, "comentario 2 al producto 1");
INSERT INTO comentarios (id, idUsuario, idProducto, texto) VALUES (default, 5, 1, "comentario 3 al producto 1");
INSERT INTO comentarios (id, idUsuario, idProducto, texto) VALUES (default, 2, 2, "comentario 1 al producto 2");
INSERT INTO comentarios (id, idUsuario, idProducto, texto) VALUES (default, 4, 2, "comentario 2 al producto 2");
INSERT INTO comentarios (id, idUsuario, idProducto, texto) VALUES (default, 5, 2, "comentario 3 al producto 2");
INSERT INTO comentarios (id, idUsuario, idProducto, texto) VALUES (default, 3, 3, "comentario 1 al producto 3");
INSERT INTO comentarios (id, idUsuario, idProducto, texto) VALUES (default, 4, 3, "comentario 2 al producto 3");
INSERT INTO comentarios (id, idUsuario, idProducto, texto) VALUES (default, 3, 3, "comentario 3 al producto 3");
INSERT INTO comentarios (id, idUsuario, idProducto, texto) VALUES (default, 4, 4, "comentario 1 al producto 4");
INSERT INTO comentarios (id, idUsuario, idProducto, texto) VALUES (default, 2, 4, "comentario 2 al producto 4");
INSERT INTO comentarios (id, idUsuario, idProducto, texto) VALUES (default, 4, 4, "comentario 3 al producto 4");
INSERT INTO comentarios (id, idUsuario, idProducto, texto) VALUES (default, 1, 5, "comentario 1 al producto 5");
INSERT INTO comentarios (id, idUsuario, idProducto, texto) VALUES (default, 5, 5, "comentario 2 al producto 5");
INSERT INTO comentarios (id, idUsuario, idProducto, texto) VALUES (default, 3, 5, "comentario 3 al producto 5");
INSERT INTO comentarios (id, idUsuario, idProducto, texto) VALUES (default, 1, 6, "comentario 1 al producto 6");
INSERT INTO comentarios (id, idUsuario, idProducto, texto) VALUES (default, 2, 6, "comentario 2 al producto 6");
INSERT INTO comentarios (id, idUsuario, idProducto, texto) VALUES (default, 3, 6, "comentario 3 al producto 6");
INSERT INTO comentarios (id, idUsuario, idProducto, texto) VALUES (default, 4, 7, "comentario 1 al producto 7");
INSERT INTO comentarios (id, idUsuario, idProducto, texto) VALUES (default, 1, 7, "comentario 2 al producto 7");
INSERT INTO comentarios (id, idUsuario, idProducto, texto) VALUES (default, 3, 7, "comentario 3 al producto 7");
INSERT INTO comentarios (id, idUsuario, idProducto, texto) VALUES (default, 5, 8, "comentario 1 al producto 8");
INSERT INTO comentarios (id, idUsuario, idProducto, texto) VALUES (default, 4, 8, "comentario 2 al producto 8");
INSERT INTO comentarios (id, idUsuario, idProducto, texto) VALUES (default, 3, 8, "comentario 3 al producto 8");
INSERT INTO comentarios (id, idUsuario, idProducto, texto) VALUES (default, 2, 9, "comentario 1 al producto 9");
INSERT INTO comentarios (id, idUsuario, idProducto, texto) VALUES (default, 1, 9, "comentario 2 al producto 9");
INSERT INTO comentarios (id, idUsuario, idProducto, texto) VALUES (default, 4, 9, "comentario 3 al producto 9");
INSERT INTO comentarios (id, idUsuario, idProducto, texto) VALUES (default, 5, 10, "comentario 1 al producto 10");
INSERT INTO comentarios (id, idUsuario, idProducto, texto) VALUES (default, 2, 10, "comentario 2 al producto 10");
INSERT INTO comentarios (id, idUsuario, idProducto, texto) VALUES (default, 3, 10, "comentario 3 al producto 10");
	