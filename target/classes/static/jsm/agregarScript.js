function agregar() {
    //Capturar valores de los campos en el documento html
    var datos={
        id:$("#numId").val(),
        messagetext:$("#messagetext").val()
    }

    //Convertimos a JSON
    let datosPeticion=JSON.stringify(datos);

    //Hacemos petición Ajax
    $.ajax({
        url:"https://g50b2ebf93d5b53-nominag35.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        data:datosPeticion,
        type:'POST',
        contentType:"application/JSON",

        success:function(respuesta) {
            console.log("Insertado");
            listar();            
        },

        error:function(xhr, status){
            console.log(status);
        }
    });    
}