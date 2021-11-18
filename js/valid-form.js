var boton = document.getElementById("boton");
boton.onclick = validar;

function validar(){
//validador de campos para saber que no estan vacios
    if(form.nombre.value==0){
        alert("El campo Nombre esta vacio");
        form.nombre.value="";
        return false;
    }
    if(form.pais.value==0){
        alert("El campo Pais esta vacio");
        form.pais.value="";
        return false;
    }
    if(form.correo.value==0){
        alert("El campo Correo esta vacio");
        form.correo.value="";
        return false;
    }
    if(form.mensaje.value==0){
        alert("El campo Mensaje esta vacio");
        form.mensaje.value="";
        return false;
    }
}
//validador de correo electronico
function correoval(correo){
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var valides= expReg.test(correo);
    if(valides==true){
    }
    else{
        alert("El correo no es valido");
    }
}
