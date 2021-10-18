function borrar(numId){
    
    var datos={
        id:numId
    }

    let datosPeticion=JSON.stringify(datos);

    //Hacemos petición Ajax
    $.ajax({
        url:"https://g50b2ebf93d5b53-nominag35.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        data:datosPeticion,
        type:'DELETE',
        contentType:"application/JSON",

        success:function(respuesta) {
            console.log("BORRADO");
            listar();            
        },

        error:function(xhr, status){
            console.log(status);
        }
    }); 

}