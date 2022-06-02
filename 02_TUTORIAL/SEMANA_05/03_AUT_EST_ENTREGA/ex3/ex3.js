function teste(){
    var str = document.getElementById("n1").value
    var f1 = parseInt(document.getElementById("f1").value)
    str = str.split(",").slice()
    var array = str.map(Number)
    var teste = []
    while( typeof (i = array.shift()) !== 'undefined' ) {
    parseInt(i)
    teste.unshift(i)
    }
    var length = teste.length;  
    for (var i = 0; i < length; i++) { 
          for (var j = 0; j < (length - i - 1); j++) { 
                   if(teste[j] > teste[j+1]) {
                           var tmp = teste[j]; 
                teste[j] = teste[j+1]; 
                teste[j+1] = tmp; 
            }
        }        
    }

    var vf = 1 + teste.indexOf(f1)
    console.log(vf)
    if (vf != 0){
        document.getElementById('vf').innerHTML = "Números ao organizar: " + teste;
    }
    else{
        document.getElementById('vf').innerHTML = "Valor focal não identificado"
    }
    document.getElementById('saida').innerHTML = "Posição do valor focal: " + vf;
}