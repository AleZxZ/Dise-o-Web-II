var parrafo=document.getElementById('fecha');
function mostrarFecha(){
    var fecha = new Date();
    var dia=fecha.getDate();
    var mes=fecha.getMonth()+1;
    var año=fecha.getFullYear();
    var hora=fecha.getHours();
    var min=fecha.getMinutes();
    var seg=fecha.getSeconds();
    parrafo.innerHTML=(dia+'/'+mes+'/'+año+'  '+hora+':'+min+':'+seg);
    
}
var intervalo = setInterval(mostrarFecha,1000);


