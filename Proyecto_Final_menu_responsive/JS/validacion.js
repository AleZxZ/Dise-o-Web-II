/***formulario delivery */
var formularioDelivery = document.getElementById('formularioDelivery'),

nombreDelivery = formularioDelivery.nombre,
apellidoDelivery = formularioDelivery.apellido,
nitDelivery = formularioDelivery.nit,
direccionDelivery = formularioDelivery.direccion,
celularDelivery = formularioDelivery.celular,
error= document.getElementById('errorDelivery');

function validarNombreDelivery(e){
    if (nombreDelivery.value == '' || nombreDelivery.value == null) {
        error.style.display='block';
        error.innerHTML += '<li>porfavor complete el campo nombre</li>';
        console.log('porfavor complete el campo nombre');
        
        e.preventDefault();
        

        
    }else{
        error.style.display='none';
        
        
    }
}
function validarApellidoDelivery(e){
    if (apellidoDelivery.value == '' || apellidoDelivery.value == null) {
        error.style.display='block';
        error.innerHTML += '<li>porfavor complete el campo Apellido</li>';
        console.log('porfavor complete el campo nombre');
        
        e.preventDefault();
        

        
    }else{
        error.style.display='none';
        
        
    }
}
function validarNitDelivery(e){
    if (nitDelivery.value == '' || nitDelivery.value == null) {
        error.style.display='block';
        error.innerHTML += '<li>porfavor complete el campo CI/Nit</li>';
        console.log('porfavor complete el campo nombre');
        
        e.preventDefault();
        

        
    }else{
        error.style.display='none';
        
        
    }
}
function validarDireccionDelivery(e){
    if (direccionDelivery.value == '' || direccionDelivery.value == null) {
        error.style.display='block';
        error.innerHTML += '<li>porfavor complete el campo Direccion</li>';
        console.log('porfavor complete el campo nombre');
        
        e.preventDefault();
        

        
    }else{
        error.style.display='none';
        
        
    }
}
function validarCelularDelivery(e){
    if (celularDelivery.value == '' || celularDelivery.value == null) {
        error.style.display='block';
        error.innerHTML += '<li>Porfavor ingrese el campo Celular</li>';
        console.log('porfavor complete el campo nombre');
        
        e.preventDefault();
        

        
    }else{
        error.style.display='none';
        
        
    }
}
function validarFormDelivery(e){
    error.innerHTML='';


    validarNombreDelivery(e);
    validarApellidoDelivery(e);
    validarNitDelivery(e);
    validarDireccionDelivery(e);
    validarCelularDelivery(e); 


}
formularioDelivery.addEventListener('submit', validarFormDelivery);