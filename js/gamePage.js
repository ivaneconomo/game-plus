const juego = JSON.parse(localStorage.getItem('gamePag'));
if(juego == undefined){
  window.location = './index.html'
}

document.getElementById('headTitle').innerHTML = `Game-Plus ${juego.title}`;

const portada = document.createElement('div');
portada.setAttribute('id','portada');
portada.className = 'd-flex align-items-end justify-content-center border-secondary border border-1rounded'
portada.innerHTML = `<h2 class="text-white text-center px-3 px-md-0 mb-5">${juego.title}</h2>`;
document.getElementById('article').appendChild(portada);
const bg = document.getElementById('portada');
bg.style.backgroundImage = `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%, rgba(106,29,249,1) 100%), url("${juego.url}")`;
bg.style.backgroundSize = "cover";
bg.style.backgroundRepeat = "no-repeat";
bg.style.width = "100%";
bg.style.height = "400px";

const artic = document.createElement('div');
artic.className = 'col-12 px-3 px-md-4 px-lg-5 py-4 border border-secondary border-2 bgCardsGrad text-white';
artic.innerHTML = 
`<p>${juego.description}</p>
  <div class="d-md-flex justify-content-center col-12 mt-3">
  <a type="button" href="./index.html" class="btn botones col-12 col-md-2 me-2">Volver</a>
  <a type="button" href="./error404.html" class="btn botones col-12 col-md-2 me-2">Ver trailer</a>
  <a type="button" href="./error404.html" class="btn botones col-12 col-md-2">Comprar</a>
  </div>`;
document.getElementById('article').appendChild(artic);