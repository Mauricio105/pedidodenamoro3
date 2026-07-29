const inicio = document.getElementById("inicio");
const pedido = document.getElementById("pedido");
const final = document.getElementById("final");

const abrir = document.getElementById("abrir");
const sim = document.getElementById("sim");
const nao = document.getElementById("nao");

const musica = document.getElementById("musica");

const gato = document.getElementById("gato");

abrir.onclick = ()=>{

inicio.style.display="none";
pedido.style.display="flex";

}

// botão fugindo

nao.addEventListener("mouseover",mover);

nao.addEventListener("click",mover);

function mover(){

const x=Math.random()*(window.innerWidth-150);

const y=Math.random()*(window.innerHeight-80);

nao.style.left=x+"px";
nao.style.top=y+"px";

}

// clicou no SIM

sim.onclick=()=>{

pedido.style.display="none";

final.style.display="flex";

animar();

chuva();

}

// animação de apenas 2 frames

const frames=[
    "img/ChatGPT_Image_29_de_jul._de_2026__10_25_21-removebg-preview.png",
    "img/ChatGPT_Image_29_de_jul._de_2026__10_26_18-removebg-preview.png"
];

let atual=0;

function animar(){

setInterval(()=>{

atual++;

if(atual>=frames.length){

atual=0;

}

gato.src=frames[atual];

},200);

}

// corações

function chuva(){

setInterval(()=>{

const h=document.createElement("div");

h.innerHTML="❤️";

h.style.position="absolute";

h.style.left=Math.random()*100+"vw";

h.style.top="-30px";

h.style.fontSize=Math.random()*20+20+"px";

document.body.appendChild(h);

let y=-30;

const queda=setInterval(()=>{

y+=3;

h.style.top=y+"px";

if(y>window.innerHeight){

clearInterval(queda);

h.remove();

}

},20);

},300);

}