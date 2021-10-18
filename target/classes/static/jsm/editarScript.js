$(document).ready(function(){
    $("#btnGuardar").hide();


})

function editarRegistro(numId){
    $("#btnGuardar").show();
    $("#btnAgregar").hide();
    $("#btnListar").hide();
    $("#numId").prop('disabled', true);
    $("#messagetext").focus();


    var datos={
        id:numId
    }

    let datosPeticion=JSON.stringify(datos);

    $.ajax({
        url:"https://g50b2ebf93d5b53-nominag35.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message/"+numId,
        type:'GET',
        dataType:'json',
    
        success:function(respuesta) {
            var items=respuesta.items;

            $("#numId").val(items[0].id);
            $("#messagetext").val(items[0].messagetext);
            console.log(items);                      
        },
   
        error:function(xhr, status){
            console.log(status);
        }
    });  



}

function actualizar(){
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
        type:'PUT',
        contentType:"application/JSON",

        success:function(respuesta) {
            console.log("Actualizado");
            listar();            
        },

        error:function(xhr, status){
            console.log(status);
        }


    }); 

    $("#btnGuardar").hide();
    $("#btnAgregar").show();
    $("#btnListar").show();
    $("#numId").prop('disabled', false);
    $("#numId").focus();



}