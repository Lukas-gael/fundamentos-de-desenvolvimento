let botao = document.querySelector("#botao");
botao.style.background="blue";
let estaQuebrado=false;
    
botao.addEventListener("mouseover", e =>{
    if(estaQuebrado===false)
    botao.style.background="green";
});

/*
function trocaVerde(){
    botao.style.background="green";
}*/
   

botao.addEventListener("mouseout", e =>{
    if(!estaQuebrado)
    botao.style.background="blue";
});


botao.addEventListener("click", e =>{
    botao.style.background="red";
    botao.innerHTML="quebrei";
    estaQuebrado=true;
}); 

const campo1 = document.querySelector('#campo1');
const campo2 = document.querySelector('#campo2');
const seletor = document.querySelector('#operacao');
const resolver = document.querySelector("#igual");
let resposta = document.querySelector('#resposta');

resolver.addEventListener("click", calcular);

function calcular(){

    if(campo1.value==="" || campo2.value===""){
        resposta.classList.add("problema");
        resposta.innerHTML="ERRO"
        setTimeout(()=>{
            resposta.classList.remove('problema');
            resposta.innerHTML="";
        },3000);
    }

    else{
    const valor1 = parseInt (campo1.value);
    const valor2 = parseInt (campo2.value);
    const operacao = seletor.value;
    if(operacao==="somar")
        resposta.innerHTML=valor1+valor2;
    if(operacao==='subtrair')
        resposta.innerHTML=valor1-valor2;
    if(operacao==='multiplicar')
        resposta.innerHTML=valor1*valor2;
    if(operacao==='dividir')
        resposta.innerHTML=valor1/valor2;
}}

const pedaco1 = document.querySelector('#pedaco1');
const pedaco2 = document.querySelector('#pedaco2');
const seletor2= document.querySelector('#conta');
let resultado = document.querySelector('#resultado');

seletor2.addEventListener("change",calculo)
pedaco1.addEventListener("keyup", calculo);
pedaco2.addEventListener("keyup", calculo);

function calculo(){
    
    if(pedaco1.value!="" && pedaco2.value!=""){
        
    const valor1 = parseInt (pedaco1.value);
    const valor2 = parseInt (pedaco2.value);
    const conta = seletor2.value;
    if(conta==="mais")
        resultado.innerHTML=valor1+valor2;
    if(conta==='menos')
        resultado.innerHTML=valor1-valor2;
    if(conta==='multiplo')
        resultado.innerHTML=valor1*valor2;
    if(conta==='dividido')
        resultado.innerHTML=valor1/valor2;
}
}