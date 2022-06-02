function calculo(){
    var n1 = parseFloat(document.getElementById('n1').value)
    var opera = document.getElementById('tipocalc').value
    var n2 = parseFloat(document.getElementById('n2').value)

    if(opera == 0){
        resultado = n1 + n2
    }
    else if(opera ==1){
        resultado = n1 - n2
    }
    else if(opera ==2){
        resultado = n1 / n2
    }
    else if(opera ==3){
        resultado = n1 * n2
    }
    else if(opera ==4){
        resultado = n1 % n2
    }
    document.getElementById('resultado').innerHTML = resultado;
}