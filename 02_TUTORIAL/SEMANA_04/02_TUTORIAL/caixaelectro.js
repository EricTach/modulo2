function conta() {

var valor = dinheiro
var dinheiro = document.getElementById('valor').value
var notas10 = parseInt(dinheiro/10)
var notas50 = parseInt(dinheiro/50)
var notas20 = parseInt(dinheiro/20)
var notas5 = parseInt(dinheiro/5)
var notas100 = parseInt(dinheiro/100)


    if (notas10 > 1){
        document.getElementById ('notas10').innerHTML = " Notas de 10 reais: " + notas10;
    } else {
        document.getElementById ('notas10').innerHTML = " Notas de 10 reais: 0";
    }
    
    document.getElementById ('notas50').innerHTML = " Notas de 50 reais: " + notas50; 
    document.getElementById ('notas20').innerHTML = " Notas de 20 reais: " + notas20; 
    document.getElementById ('notas100').innerHTML = " Notas de 100 reais: " + notas100; 
    document.getElementById ('notas5').innerHTML = " Notas de 10 reais: " + notas5; 
    document.getElementById ('din').innerHTML = " Valor inserido: " + valor; 
}


