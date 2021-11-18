var i = document.getElementById('b');
i.addEventListener ("click",validar);

function validar(){
    var z = document.getElementById('nombre').value;
    var x = document.getElementById('pais').value;
    var c = document.getElementById('correo').value;
    var v = document.getElementById('mensaje').value;
    if( z.length==0){
        alert("El campo Nombre esta vacio");
        return ;
    }
    if( x.length==0){
        alert("El campo Pais esta vacio");
        return ;
    }
    if( c.length==0){
        alert("El campo Correo esta vacio");
        return ;
    }
    if( v.length==0){
        alert("El campo Mensaje esta vacio");
        return ;
    }

}
//validador de correo electronico
function correoval(c){
    var c = document.getElementById('correo').value;
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var valides= expReg.test(c);
    if(valides==true){
    }
    else{
        alert("El correo no es valido");
    }
}
