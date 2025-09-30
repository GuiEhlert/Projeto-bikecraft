//Ativar os links do menu
const links = document.querySelectorAll(".header-menu a");

function LinkOn(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(LinkOn);

//Ativar os itens do orçamento
const parametros = new URLSearchParams(location.search);

function ProductOn(parametro) {
  const element = document.getElementById(parametro);
  if (element) {
    element.checked = true;
  }
}

parametros.forEach(ProductOn);

//Perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function perguntasEvent(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(perguntasEvent);

//Galeria de Bikes
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function TradeImg(event) {
  const imh = event.currentTarget;
  matchMedia("(min-width: 1000px)").matches;
  if (media) {
    galeriaContainer.prepand(img);
  }
}

function galeriaEvent(img) {
  img.addEventListener("click", TradeImg);
}

galeria.forEach(galeriaEvent);

//Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
