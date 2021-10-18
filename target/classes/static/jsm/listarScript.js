function listar() {
    $.ajax({
        url:"https://g50b2ebf93d5b53-nominag35.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:'GET',
        dataType:'json',
    
        success:function(respuesta) {
            console.log(respuesta); 
            listarRespuesta(respuesta.items);           
        },
    
        error:function(xhr, status){
            console.log(status);
        }
    });    
}

function listarRespuesta(items) {

    var tabla=`<table border="1">
                <tr>
                    <th>Id</th>
                    <th>MessageText</th>
                    <th colspan="2">Acciones</th>
                </tr>`;
                
    for (let i = 0; i < items.length; i++) {
        tabla+=`<tr>
                    <td>${items[i].id} </td>
                    <td>${items[i].messagetext} </td>
                    <td><button onclick="editarRegistro(${items[i].id})">Editar</button> </td>
                    <td><button onclick="borrar(${items[i].id})">Borrar</button> </td>
                </tr>`;        
    }

    tabla+=`</table>`
  
    $("#listado").html(tabla)
    
}