function box(){
    var container = document. getElementsByClassName("form");
    var boton = document.getElementById("boton");
    boton.addEventListener("click",datos);

function datos(){
    let inputNombre = document.getElementById("nombre").value;
    let inputPais = document.getElementById("pais").value;
    let inputCorreo = document.getElementById("correo").value;
    let inputMensaje = document.getElementById("mensaje").value;

    var ok = true;

    var TextA = new RexExp('A-Za-z]+');
    var CorreoA = expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var mensaje = "Errores: ";
    
    if(!TextA.test(inputNombre))
    {
        alert = "El campo nombre esta vacio ";
        ok = false;
    }
    if(!TextA.test(inputPais))
    {
        mensaje += "El campo pais esta vacio ";
        ok = false;
    }
    if(!CorreoA.test(inputCorreo))
    {
        mensaje += "El Nombre es incorrecto o esta vacio ";
        ok = false;
    }
    if(!TextA.test(inputMensaje))
    {
        mensaje += "El campo Mensaje esta vacio ";
        ok = false;
    }
}
}