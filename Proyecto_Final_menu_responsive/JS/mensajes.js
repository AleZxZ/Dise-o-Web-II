function mensaje(){
    alert("Su pedido esta proceso, Gracias por su preferencia");
  
}
function mensaje2(){
    alert("Se agrego a su lista de compra");
  
}
var formulario = document.getElementById('formulario'),

nombre = formulario.nombre,
apellido = formulario.apellido,
correo = formulario.correo,
contraseña = formulario.contraseña,
genero = formulario.genero,
error= document.getElementById('error');

function validarNombre(e){
    if (nombre.value == '' || nombre.value == null) {
        error.style.display='block';
        error.innerHTML += '<li>porfavor complete el campo nombre</li>';
        console.log('porfavor complete el campo nombre');
        
        e.preventDefault();
        

        
    }else{
        error.style.display='none';
        
        
    }
}
function validarApellido(e){
    if (apellido.value == '' || apellido.value == null) {
        error.style.display='block';
        error.innerHTML += '<li>porfavor complete el campo Apellido</li>';
        console.log('porfavor complete el campo nombre');
        
        e.preventDefault();
        

        
    }else{
        error.style.display='none';
        
        
    }
}
function validarCorreo(e){
    if (correo.value == '' || correo.value == null) {
        error.style.display='block';
        error.innerHTML += '<li>porfavor complete el campo Correo</li>';
        console.log('porfavor complete el campo nombre');
        
        e.preventDefault();
        

        
    }else{
        error.style.display='none';
        
        
    }
}
function validarContraseña(e){
    if (contraseña.value == '' || contraseña.value == null) {
        error.style.display='block';
        error.innerHTML += '<li>porfavor complete el campo Contraseña</li>';
        console.log('porfavor complete el campo nombre');
        
        e.preventDefault();
        

        
    }else{
        error.style.display='none';
        
        
    }
}
function validarSexo(e){
    if (genero.value == '' || genero.value == null) {
        error.style.display='block';
        error.innerHTML += '<li>porfavor seleccione su genero</li>';
        console.log('porfavor complete el campo nombre');
        
        e.preventDefault();
        

        
    }else{
        error.style.display='none';
        
        
    }
}
function validarForm(e){
    error.innerHTML='';


    validarNombre(e);
    validarApellido(e);
    validarCorreo(e);
    validarContraseña(e);
    validarSexo(e); 


}
formulario.addEventListener('submit', validarForm);


