function caixa() {

    var total = document.getElementById('valor').value;

    var notas = 0
    document.getElementById('calu').innerHTML = '';

    let nota100 = parseInt(total / 100);
        total = total % 100
        if (nota100 >= 1) {
            document.getElementById('calu').innerHTML += '<br>NOTAS DE 100: ' + nota100;
        }

    let nota50 = parseInt (total / 50);
        total = total % 50
        if (nota50 >= 1) {
            document.getElementById('calu').innerHTML += '<br>NOTAS DE 50: ' + nota50;
        }


    let nota20 = parseInt (total / 20);
        total = total % 20
        if (nota20 >= 1) {
            document.getElementById('calu').innerHTML += '<br>NOTAS DE 20: ' + nota20;
        }

    let nota10 = parseInt (total / 10);
        total = total % 10

        if (nota10 >= 1) {
            document.getElementById('calu').innerHTML += '<br>NOTAS DE 10: ' + nota10;
        }

    let nota5 = parseInt (total / 5); 
        total = total % 5
        if (nota5 >= 1) {
            document.getElementById('calu').innerHTML += '<br>NOTAS DE 5: ' + nota5;
        }


    let nota2 = parseInt (total / 2); 

    if (nota2 >= 1) {
        document.getElementById('calu').innerHTML += '<br>NOTAS DE 2: ' + nota2;
    }

    let nota1 = parseInt(total % 2); 
    if (nota1 >= 1) {
        document.getElementById('calu').innerHTML += '<br>MOEDAS DE 1 REAL: ' + nota1;
    }

}    
    
    
    
    
    
    
    


