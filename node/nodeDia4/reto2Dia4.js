const express   = require("express");
const { Professional } = require("./IMDB/clases/professional.js");
const app       = express();
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

let profesional = new Professional("Charlize Theron", 46, "Femenino", 58, 177, "Rubio", "Azul", "Caucásica", false, "Sudafricana", 1, "Actriz");
//let profesional = null;

let arrayProfesionales =[profesional];

app.get("/profesionales",
    function (request, response)
    {
        if(request.query.id==undefined){
            respuesta= {
                "error": false,
                "codigo": 200,
                "mensaje": "lista de actor encontrado",
                "resultado": arrayProfesionales
            }
        }
        else{
            respuesta= {
                "error": false,
                "codigo": 200,
                "mensaje": "actor encontrado",
                "resultado": arrayProfesionales[request.query.id]
            }
        }
        console.log("Profesional mostrado al cliente numero 5")
        response.send(respuesta)
    });

    app.post("/profesionales",
    function (request,response)
    {
        console.log("añadiendo profesional al array...")
        let respuesta;
    
         profesional = new Professional (
                         request.body.name,
                       request.body.age,
                       request.body.genre,
                       request.body.weight,
                       request.body.height,
                       request.body.hairColor,
                       request.body.eyeColor,
                       request.body.race,
                         request.body.isRetired,
                       request.body.nationality,
                       request.body.oscarsNumber,
                       request.body.profession)
                       arrayProfesionales.push(profesional);
                      console.log("creando profesional por parte del cliente...")
        respuesta={ mensaje: "actor creado correctamente con los siguientes datos: ",  resultado : arrayProfesionales};
        response.send(respuesta);
    
    
    });

    app.put("/profesionales",
    function(request, response)
    {
        let respuesta;
        let id=request.body.id;
        
              arrayProfesionales[id].name = request.body.name;
              arrayProfesionales[id].age = request.body.age;
              arrayProfesionales[id].genre = request.body.genre;
              arrayProfesionales[id].weight = request.body.weight;
              arrayProfesionales[id].height = request.body.height;
              arrayProfesionales[id].hairColor = request.body.hairColor;
              arrayProfesionales[id].eyeColor = request.body.eyeColor;
              arrayProfesionales[id].race = request.body.race;
              arrayProfesionales[id].isRetired = request.body.isRetired;
              arrayProfesionales[id].nationality = request.body.nationality;
              arrayProfesionales[id].oscarsNumber = request.body.oscarsNumber;
              arrayProfesionales[id].profession = request.body.profession;
              console.log("editando profesional por parte del cliente...")
respuesta={ mensaje: "actor editado correctamente con los siguientes datos: ",  resultado : arrayProfesionales};
response.send(respuesta);
       
    });

    app.delete("/profesionales",
    function(request,response)
    {
        let respuesta 
        let id=request.body.id;
           arrayProfesionales.splice(id,1);
        
            respuesta ={mensaje:"el profesional no existe",resultado:arrayProfesionales};
            response.send(respuesta);
        

    });



    app.listen(4000)
