//Exercício 1
function sub(){
    var numero = parseInt(document.querySelector("#qnt").value);
    var resultado1 = numero - 1;
    if(resultado1 >= 0){
    document.querySelector("#qnt").value = resultado1;
    }
}


function add(){
    var numero = parseInt(document.querySelector("#qnt").value);
    var pass = numero + 1;
    document.querySelector("#qnt").value = pass;
}

//Exercício 2
function troca(){
    var nome1 = document.querySelector("#nome1").value;
    var nome2 = document.querySelector("#nome2").value;
    document.querySelector("#nome1").value = nome2;
    document.querySelector("#nome2").value = nome1;

}

//Exercício 3
function formatar(){
    console.log( document.querySelector("#telefone").value)
    var telefone = document.querySelector("#telefone").value;
    var telefoneFormatar = telefone.replace(/\D/g, '');
    var telefoneFormatado = telefoneFormatar.replace(/(\d{2})(\d)/, '($1) $2');
    telefoneFormatado = telefoneFormatado.replace(/(\d{5})(\d)/, '$1-$2');
    document.querySelector("#telefone").value = telefoneFormatado;
}

function calcpass(){
    var pessoas = parseInt(document.querySelector("#pass").value);
    console.log(pessoas);
    var turno = document.querySelector("#turno").value;
    if(turno == 1){
        const preco = 100;
        console.log("TesteNoturno");
        if(pessoas > 50){
            var pre1 = preco * (pessoas * 0.8);
            document.querySelector("#resultado4").innerHTML = pre1;
        }
        else{
            var pre2 = preco * pessoas;
            document.querySelector("#resultado4").innerHTML = pre2;
        }
    }

    else if(turno == 2){
        console.log("TesteDiurno");
        const preco2 = 200;
        if(pessoas > 50){
            var pre3 = preco2 * (pessoas * 0.6);
            document.getElementById("resultado4").innerHTML = pre3;
            console.log(pre3)
        }
        else{
            var pre4 = preco2 * pessoas;
            document.querySelector("#resultado4").innerHTML = pre4;
        }
    }
}


