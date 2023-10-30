const botao = document.getElementsByClassName('botao');
const valor = document.getElementById('num-carrinho');
const preco = document.getElementsByClassName('preco');
const total = document.getElementById('total')
const parcelas = document.getElementsByClassName('parcelas');
const navBar = document.getElementsByClassName('comprar-agora');
const navList = document.getElementById('nav-list');
const titulo = document.getElementsByClassName('titulo')
const descricao = document.getElementsByClassName('descricao')
const fotoNav = document.getElementById('foto-nav')
const descricaoNav = document.getElementById('descricao-nav')
const foto = document.getElementsByClassName('foto')
const tituloNav = document.getElementById('titulo-nav')
const pix = document.getElementById('pix')
const divPix = document.getElementById('fotopix');
const boleto = document.getElementById('boleto')
const divBoleto = document.getElementById('boletofoto')
const cartao = document.getElementById('cartao')
const divCartao = document.getElementById('cartaonumero')
const precoNav = document.getElementById('precoNav')

let numeroAtual = 0;
let cont = 0;

let valorAtual = 0;

let isVisiblePix = true;




pix.addEventListener("click", () => {
  if (isVisiblePix) {
    divPix.style.display = "none"; // Ocultar o elemento
  } else {
    divPix.style.display = "block"; // Exibir o elemento
  }

  isVisiblePix = !isVisiblePix;
});

let isVisibleBoleto = true;

boleto.addEventListener("click", () => {
    if (isVisibleBoleto) {
      divBoleto.style.display = "none"; // Ocultar o elemento
    } else {
      divBoleto.style.display = "block"; // Exibir o elemento
    }
  
    isVisibleBoleto = !isVisibleBoleto;
  });


let isVisibleCartao = true

cartao.addEventListener("click", () => {
 if (isVisibleBoleto) {
   divCartao.style.display = "none"; // Ocultar o elemento
 } else {
   divCartao.style.display = "block"; // Exibir o elemento
 }
  
 isVisibleBoleto = !isVisibleBoleto;
});
  

function Animação(indice) {
    navList.classList.add('animacao');
    descricaoNav.innerText = descricao[indice].textContent;
    tituloNav.innerText = titulo[indice].textContent;
    fotoNav.style.backgroundImage = `url(${foto[indice].getAttribute("src")})`;
    precoNav.innerText = `R$${preco[indice].textContent}`
}

function remove() {
    navList.classList.remove('animacao');
}


function parcelar () {
    for(i = 0; i < 10; i++) {
        if (Number(preco[i].innerText) < 10) {
            parcelas[i].innerText = `2x de R$${(preco[i].innerText / 2).toFixed(2)}`
        } else if (Number(preco[i].innerText) < 50) {
            parcelas[i].innerText = `3x de R$${(preco[i].innerText / 3).toFixed(2)}`
        } else if (Number(preco[i].innerText) < 200) {
            parcelas[i].innerText = `6x de R$${(preco[i].innerText / 3).toFixed(2)}`
        } else {
            parcelas[i].innerText = `10x de R$${(preco[i].innerText / 3).toFixed(2)}`
        }
    }
}
window.addEventListener('load', parcelar);


function calcular(indice) {
    numeroAtual ++;
    valor.textContent = numeroAtual;

    valorAtual += parseFloat(preco[indice].textContent);
    
    total.textContent = valorAtual.toFixed(2);
}


function zerarCarrinho() {
    numeroAtual = 0
    valor.textContent = 0;

    valorAtual = 0;
    total.textContent = 0
    cont = 0;
};

function openPage(x, y) {
    var indice = x
    var target = y
    var url = './../content/content' + indice + '.html'

    var xml = new XMLHttpRequest()

    xml.onreadystatechange = function () {
        if (xml.readyState == 4 && xml.status == 200) {
            document.getElementById(target).innerHTML = xml.responseText
        }
    }

    xml.open("GET", url, true)

    xml.send()
}

'use strict';

const images = [
    {'id':'1', 'url': './img/slide1.jpg'},
    {'id':'2', 'url': './img/slide2.jpg'},
    {'id':'3', 'url': './img/slide3.jpg'},
    {'id':'4', 'url': './img/slide4.jpg'},
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item' data-number=${image.id}>
                <img src='${image.url}'
            </div>
        `
    })
}


loadImages( images , containerItems);
let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0])
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length -1];
    containerItems.insertBefore( lastItem, items[0]);
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', next);
document.querySelector('#next').addEventListener('click', previous);

