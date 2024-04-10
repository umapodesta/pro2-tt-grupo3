CREATE SCHEMA my_db;

USE my_db;

CREATE TABLE usuarios (
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
	deletedAt  			TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
    
);

/* ***** LUNES *****	SQL para Insertar registros 
NOTA: SI NO PUEDES INSERTAR ESTE REGISTRO POR MOTIVO DEL SAVE MODE O EL MODO SEGURO
EDIT -> PREFERENCES -> SQL EDITOR -> SAVE UPDATE = OFF*/




	