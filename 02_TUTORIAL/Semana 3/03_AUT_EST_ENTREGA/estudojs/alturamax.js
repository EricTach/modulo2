function ex1() {
    
    var v0 = document.getElementById('v0').value;
    const g = 10; 
    var tUp = v0/g;
    var altmax = ((v0*v0)/(2*g));
    console.log("TEMPO DE SUBIDA = " + tUp);
    document.getElementById ('vem').innerHTML = " O tempo de subida é: " + tUp + "s"; 
    document.getElementById ('bora').innerHTML = " A altura máxima foi igual à: " + altmax + "m";
}