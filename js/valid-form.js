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
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if( c.length==0){
        alert("El campo Correo esta vacio");
        return ;
    }
    
    if(!expReg.test(c)==false){
    }
    else{
        alert("El correo no es valido");
    }


    if( v.length==0){
        alert("El campo Mensaje esta vacio");
        return ;
    }

}
