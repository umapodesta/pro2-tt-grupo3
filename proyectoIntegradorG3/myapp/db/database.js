let db = {
    usuarios : {
        nombre : "Maria Eugenia",
        apellido: "Martinez",
        mail: "user@mail.com",
        usuario: "Maria_Eugenia",
        contrasenia: "********",
        fechaNacimiento: "8/12/04",
        numeroDocumento: 46567890,
        foto: "" 
    },
    productos: [ 
        
        {
            // Datos del producto 1
            nombre: "Patito Policia",
            descripcion: "Pato de hule color amarillo con traje de policia azul. ",
            imagenProducto: "/images/products/patodegomaPolicia.jpeg",
            

            comentarios: [
                {   // Comentarios del producto 1
                    Username: "brian.123",
                    descripcion: "Que tan amarillo es el patito?",
                    imagenUsuario: "/public/images/users/defaultImage.png"
                },
                
            ]
        },

        {   // Datos del producto 2
            nombre: "Patito Princesa Rosada",
            descripcion: "Pato de hule color rosado con su corona dorada (inspirado en la artista pop argetinta Martina Stoessel - TINI TINI TINI).",
            imagenProducto: "/images/products/ScreenShot2024-04-17at13.16.22.png",
            

            comentarios: [
                {   // Comentarios del producto 2
                    Username: "Marga",
                    descripcion: "Que producto original!",
                    imagenUsuario: "/public/images/users/defaultImage.png"
                },
                {   
                    Username: "Alan",
                    descripcion: "Quiero todossss",
                    imagenUsuario: "/public/images/users/defaultImage.png"
                },
                
            ]
        },

        {   //Datos del producto 3
            nombre: "Patito Bombero",
            descripcion: "Pato de hule color amarillo con traje de bombero rojo y gorro negro.",
            imagenProducto: "/images/products/ScreenShot2024-04-17at13.18.28.png",
            

            comentarios: [
                {   // Comentarios del producto 3
                    Username: "Rodrigo",
                    descripcion: "Yo queria meterme en Mercado Libre y mira donde termine",
                    imagenUsuario: "/public/images/users/defaultImage.png"
                },
                {   
                    Username: "Elena",
                    descripcion: "Son demasiado chicos",
                    imagenUsuario: "/public/images/users/defaultImage.png"
                },
                {   
                    Username: "Carla",
                    descripcion: "En el chino hay mejores",
                    imagenUsuario: "/public/images/users/defaultImage.png"
                },
                
            ]
        },

        {   // Datos del producto 4
            nombre: "Patito Freddy Mercury",
            descripcion: "Pato de hule color amarillo del artista Freddy Mercury (incluye microfono y anteojos).",
            imagenProducto: "/images/products/freddymercury.jpeg",
            

            comentarios: [
                {   // Comentarios del producto 4
                    Username: "Josefa",
                    descripcion: "Quack Quack",
                    imagenUsuario: "/public/images/users/defaultImage.png"
                },
                
            ]
        },

        {   // Datos del producto 5
            nombre: "Patito Hombre Araña",
            descripcion: "Pato de hule con traje del superheroe Spiderman.",
            imagenProducto:"/images/products/ScreenShot2024-04-17at13.19.49.png",
            

            comentarios: [
                {   // Comentarios del producto 5
                    Username: "AndrewGarfield",
                    descripcion: "Aguante Tom Hollandddd",
                    imagenUsuario: "/public/images/users/defaultImage.png"
                },
                {   
                    Username: "Tobey",
                    descripcion: "Prefiero el spiderman original...",
                    imagenUsuario: "/public/images/users/defaultImage.png"
                },
                
            ]
        },

        {   // Datos del producto 6
            nombre: "Patito Minion",
            descripcion: "Pato de hule color amarillo con traje de minion (incluye guantes y googles).",
            imagenProducto:"/images/products/comprar-patito-goma-minions.jpeg",
            

            comentarios: [
                {   // Comentarios del producto 6
                    Username: "Gru",
                    descripcion: "Quien quiere ir a la lunaaaa?",
                    imagenUsuario: "/public/images/users/defaultImage.png"
                },
                
            ]
        },

        {   // Datos del producto 7
            nombre: "Patito Donald Trump",
            descripcion: "Pato de hule color amarillo del presidente DOnald Trump.",
            imagenProducto:"/images/products/donaldTrump.jpg",
            

            comentarios: [
                {   // Comentarios del producto 7
                    Username: "JoeBiden",
                    descripcion: "Yo tambien quiero un pato con mi nombre :(",
                    imagenUsuario: "/public/images/users/defaultImage.png"
                },
                
            ]
        },

        {   // Datos del producto 8
            nombre: "Patito Toro",
            descripcion: "Pato de hule de toro color negro con cuernos blancos.",
            imagenProducto: "/images/products/patotoro.jpeg",
            

            comentarios: [
                {   // Comentarios del producto 8
                    Username: "Amelia",
                    descripcion: "Torero, poner el alma en el ruedo",
                    imagenUsuario: "/public/images/users/defaultImage.png"
                },
                
            ]
        },

        {   // Datos del producto 9
            nombre: "Patito Jocker",
            descripcion: "Pato de hule del villano Joker con traje incluido.",
            imagenProducto: "/images/products/patoJocker.jpg",
            

            comentarios: [
                {   // Comentarios del producto 9
                    Username: "HarleyQueen",
                    descripcion: "AAAAAAAAAAAA quiero todos YA, mi puddin",
                    imagenUsuario: "/public/images/users/defaultImage.png"
                },
                
            ]
        },

        {   // Datos del producto 10
            nombre: "Patito Chewbacca",
            descripcion: "Pato de hule del personaje de la saga de Star Wars Chewbacca color marron.",
            imagenProducto:"/images/products/comprar-patito-goma-chewaka.jpeg",
            

            comentarios: [
                {   // Comentarios del producto 10
                    Username: "Padme",
                    descripcion: "No hay uno de Anakin? Digo, para tirarlo a la lava",
                    imagenUsuario: "/public/images/users/defaultImage.png"
                },
                {   
                    Username: "r2d2",
                    descripcion: "Yo quiero uno de citripio ",
                    imagenUsuario: "/public/images/users/defaultImage.png"
                },
                
                
            ]
        }


    ]
       
}

module.exports = db;