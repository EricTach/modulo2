//comentário em js

//criando uma mensagem de aviso
function ex1() {
    
    var v0 = document.getElementById('v0').value;
    const g = 10; 
    var tUp = v0/g;
    console.log("TEMPO DE SUBIDA = " + tUp)
    document.getElementById ('vem').innerHTML = " O tempo de subida é: " + tUp; //innerHTML junta ao código html
}
