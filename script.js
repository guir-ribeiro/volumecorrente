let sexo;
let altura = document.getElementById('altura');
let volumeCorrente_6;
let volumeCorrente_8;
let pesoPredito;
let botao = document.getElementById('botao');
let resultado = document.getElementById('resultado');

function verificarSexo(){
    let homem = document.getElementById('homem').checked;
    let mulher = document.getElementById('mulher').checked;
    if(homem == false && mulher == false){
        alert("Houve um erro no sexo")
    }else if(homem){
        sexo = "homem"
    }else{
        sexo = "mulher";
    }
}

function calcular(altura){
    verificarSexo()
    if (sexo == "" || altura === ""){
        alert("Verifique se digitou o sexo e a altura corretamente")
        return
        console.log(altura)
    }else if(sexo == "homem"){
        pesoPredito = 50 + 0.91*(altura - 152.4)

       console.log(pesoPredito)
    }else if(sexo == "mulher") {
        pesoPredito = 45.5 + 0.91*(altura - 152.4)
        console.log(pesoPredito)
    }else{
        alert("Houve algum erro!")
    }

    volumeCorrente_6 = pesoPredito * 6;
    volumeCorrente_8 = pesoPredito * 8;

    let textoResultado = document.createTextNode(`O volume corrente adequado para essa altura é entre ${volumeCorrente_6.toFixed(2)}ml e ${volumeCorrente_8.toFixed(2)}ml`); 
    resultado.appendChild(textoResultado)

}


botao.setAttribute('onclick',`calcular(altura.value)`)
