
jQuery(()=> {

  let totalPrecio=0;
  let contenidoCarrito =[];

  

  $("#carrito").on("click",()=>{
    let texto="";
    let articulos=$("#articulos");

    if(contenidoCarrito.length>0){
      texto+="<table class='carritoPrenda'>"
            for(prenda in contenidoCarrito){
                let titulo = $((contenidoCarrito[prenda]+"Titulo")).text();
                let precio = $((contenidoCarrito[prenda]+"Precio")).text();
                texto += "<tr><td class='tablaTitulo'>"+titulo + "</td><td class='tablaPrecio'>" + precio + "</td></tr>"; 
            }
            texto+="</table>";

            texto +="<br><h4 class='totalCarrito'>Total del carrito <span class='totalPrecio'>"+ totalPrecio.toFixed(2) + "€</span></h4>";

    }
    else{
      texto+="tu carrito esta vacio";
    }
    articulos.html(texto);
    $("#exampleModal").modal("show");
  });

  $("#prenda1").on("click", ()=>{
    contenidoCarrito.push("#prenda1");
    totalPrecio+=parseFloat($("#prenda1Precio").text(),10);
  });

  $("#prenda2").on("click", ()=>{
    contenidoCarrito.push("#prenda2");
    totalPrecio+=parseFloat($("#prenda2Precio").text(),10);
  });

  $("#prenda3").on("click", ()=>{
    contenidoCarrito.push("#prenda3");
    totalPrecio+=parseFloat($("#prenda3Precio").text(),10);
  });

  $("#prenda4").on("click", ()=>{
    contenidoCarrito.push("#prenda4");
    totalPrecio+=parseFloat($("#prenda4Precio").text(),10);
  });

  $("#prenda5").on("click", ()=>{
    contenidoCarrito.push("#prenda5");
    totalPrecio+=parseFloat($("#prenda5Precio").text(),10);
  });

  $("#prenda6").on("click", ()=>{
    contenidoCarrito.push("#prenda6");
    totalPrecio+=parseFloat($("#prenda6Precio").text(),10);
  });

  $("#prenda7").on("click", ()=>{
    contenidoCarrito.push("#prenda7");
    totalPrecio+=parseFloat($("#prenda7Precio").text(),10);
  });

  $("#prenda8").on("click", ()=>{
    contenidoCarrito.push("#prenda8");
    totalPrecio+=parseFloat($("#prenda8Precio").text(),10);
  });

  $("#prenda9").on("click", ()=>{
    contenidoCarrito.push("#prenda9");
    totalPrecio+=parseFloat($("#prenda9Precio").text(),10);
  });


});




