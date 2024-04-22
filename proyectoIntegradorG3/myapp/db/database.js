let db = {
    usuarios : {
        nombre : "Ted Bundy",
        email: "user@mail.com",
        contrasenia: "********"
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
                    Username: "User2",
                    descripcion: "Comentario del producto 2",
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
                    Username: "User3",
                    descripcion: "Comentario del producto 3",
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
                    Username: "User4",
                    descripcion: "Comentario del producto 4",
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
                    Username: "User5",
                    descripcion: "Comentario del producto 5",
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
                    Username: "User6",
                    descripcion: "Comentario del producto 6",
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
                    Username: "User7",
                    descripcion: "Comentario del producto 7",
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
                    Username: "User8",
                    descripcion: "Comentario del producto 8",
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
                    Username: "User9",
                    descripcion: "Comentario del producto 9",
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
                    Username: "User10",
                    descripcion: "Comentario del producto 10",
                    imagenUsuario: "/public/images/users/defaultImage.png"
                },
                
            ]
        }


    ]
       
}

module.exports = db;