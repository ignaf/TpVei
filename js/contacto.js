//alert("Estoy");
function validar(){
    var error= false;
    var mensajesError="";
    var apellido= document.getElementById("apellido").value;
    var regexTelefono =  /^[0-9]{4}[\-]{1}[0-9]{4}$/
    var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/
    var telefono= document.getElementById("tel").value;
    var email= document.getElementById("email").value;

    if(document.getElementById("nombre").value==''){ 
        error=true;
        mensajesError+="<p>El campo nombre no puede estar vacio</p>";
    }
    if(apellido==''){
        error=true;
        mensajesError+= "<p>El campo apellido no puede estar vacio</p>";
    }

   
    if(telefono !=''){
        if(!regexTelefono.test(document.getElementById("tel").value)){
            error=true;
            mensajesError+="<p>Ingrese un numero de telefono valido</p>";
        }
    }

  
    if(email != ''){
        if(!regexEmail.test(document.getElementById("email").value)){
            error=true;
            mensajesError+="<p>Ingrese una dirección de email valida</p>";
        }
    }
    

    if(error){
        document.getElementById("mensajes").innerHTML=mensajesError;
        return false;
    }else{
        return true;
    }
    
}

const cantidad=1000;
function contarCaracteres(){
    var caracteres=document.getElementById("mensaje").value.length;
    var restantes= cantidad-caracteres;
    document.getElementById("caracteres").innerHTML=restantes;
}