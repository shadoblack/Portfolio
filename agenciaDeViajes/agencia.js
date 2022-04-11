
let cumulo = document.getElementsByClassName("input_text");
let datos =[];



function recogerDatos(){
    let name  = (document.getElementById("name").value).toLowerCase();
    let origin  = (document.getElementById("origin").value).toLowerCase();
    let destiny  = (document.getElementById("destiny").value).toLowerCase();
    let num_people = document.getElementById("num_people").value;
    let date = document.getElementById("date").value;

    let usuario = {
        "nombre": name,
        "origen": origin,
        "destino": destiny,
        "persona": num_people,
        "fecha": date
    };

    datos.push(usuario);

    document.getElementById("name").value="";
    document.getElementById("origin").value="";
    document.getElementById("destiny").value="";
    document.getElementById("num_people").value=0;
    document.getElementById("date").value="";

}

// function filtrar(){
//     console.log("funciona");

//     let filtrado= array.filter(destiny=>{
//         return destiny.includes("mallorca","canarias","galicia",);
//     })
// }

function filtrar(){
    let lista = document.getElementById("lista");
    let html = "";

    for(usuario in datos){
            if(datos[usuario].destino == "canarias" || datos[usuario].destino =="mallorca" || datos[usuario].destino == "galicia" ){
                console.log(datos[usuario])
                html+=`usuario
                <ul>
                <li>nombre: ${datos[usuario].nombre}</li>
                <li>origen: ${datos[usuario].origen}</li>
                <li>destino: ${datos[usuario].destino}</li>
                <li>numero de pasajeros: ${datos[usuario].persona}</li>
                <li>fecha: ${datos[usuario].fecha}</li>
                </ul><br>`;
            }
            
        
    }
    lista.innerHTML=html;
}