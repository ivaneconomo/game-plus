const userLogueado = JSON.parse(localStorage.getItem('UserLog'));
const comprobaruser = (usser)=>{
  if(usser == undefined){
    window.location = './login.html';
  }else if (usser.email == 'admin123@gmail.com' && usser.password == 'admin159'){
    document.getElementById('linkAdmin').classList.remove('d-none');
  }
} 

comprobaruser(userLogueado);

const games = JSON.parse(localStorage.getItem('Posts')).reverse();
const game = games.find(element => element.destacado == true);
const destacado = document.createElement('img');
destacado.setAttribute('src',`${game.url}`);
destacado.setAttribute('class','imgPort');
document.getElementById('gameDes').appendChild(destacado);
const info = document.createElement('div');
info.className = 'text-white divDes animate__animated animate__fadeInLeft col-12 col-md-8 col-lg-6';
info.innerHTML = 
` <div class="mb-1 mb-md-2 mb-lg-3 title">${game.title} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning d-none d-md-inline" viewBox="0 0 16 16">
<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg></div>
  <p class="description">${game.description.slice(0, 300) + "..."}</p>
  <div class="d-flex justify-content-center justify-content-md-start">
    <button class="btn botonDes" onclick="vermasDes()"><i class="fa-solid fa-circle-info"></i>Ver más</button>
    <a href="./error404.html" class="ms-4 btn botonDes"><i class="fa-solid fa-play"></i>Ver trailer</a>
  </div>
`;
document.getElementById('gameDes').appendChild(info);
const vermasDes = () =>{
  localStorage.setItem('gamePag', JSON.stringify(game));
  window.location = './gamePage.html';
}

games.map((resp) =>{
  if(resp.category == 'accion'){
    if(resp.destacado == false){
      let juego = document.createElement('a');
      juego.setAttribute('type', 'button');
      juego.className = 'juego';
      juego.innerHTML= `<p class="d-none gameMod">${resp.id}</p><img src="${resp.url}" alt="portadadejuego">`;
      document.getElementById('geAccion').appendChild(juego);
    }
  }
})
games.map((resp) =>{
  if(resp.category == 'deportes'){
    if(resp.destacado == false){
      let juego = document.createElement('a');
      juego.setAttribute('type', 'button');
      juego.className = 'juego';
      juego.innerHTML= `<p class="d-none gameMod">${resp.id}</p><img src="${resp.url}" alt="portadadejuego">`;
      document.getElementById('geDeportes').appendChild(juego);
    }
  }
})
games.map((resp) =>{
  if(resp.category == 'aventura'){
    if(resp.destacado == false){
      let juego = document.createElement('a');
      juego.setAttribute('type', 'button');
      juego.className = 'juego';
      juego.innerHTML= `<p class="d-none gameMod">${resp.id}</p><img src="${resp.url}" alt="portadadejuego">`;
      document.getElementById('geAventura').appendChild(juego);
    }
  }
})
games.map((resp) =>{
  if(resp.category == 'estrategia'){
    if(resp.destacado == false){
      let juego = document.createElement('a');
      juego.setAttribute('type', 'button');
      juego.className = 'juego';
      juego.innerHTML= `<p class="d-none gameMod">${resp.id}</p><img src="${resp.url}" alt="portadadejuego">`;
      document.getElementById('geEstrategia').appendChild(juego);
    }
  }
})

const filaAccion = document.getElementById('carrAccion');
const filaDeportes = document.getElementById('carrDeportes');
const filaAventura = document.getElementById('carrAventura');
const filaEstrategia = document.getElementById('carrEstrategia');

document.getElementById('flecha-izquierda-Ac').addEventListener('click', () => {
	filaAccion.scrollLeft -= filaAccion.offsetWidth;
});
document.getElementById('flecha-derecha-Ac').addEventListener('click', () => {
	filaAccion.scrollLeft += filaAccion.offsetWidth;
});

document.getElementById('flecha-izquierda-De').addEventListener('click', () => {
	filaDeportes.scrollLeft -= filaDeportes.offsetWidth;
});
document.getElementById('flecha-derecha-De').addEventListener('click', () => {
	filaDeportes.scrollLeft += filaDeportes.offsetWidth;
});

document.getElementById('flecha-izquierda-Av').addEventListener('click', () => {
	filaAventura.scrollLeft -= filaAventura.offsetWidth;
});
document.getElementById('flecha-derecha-Av').addEventListener('click', () => {
	filaAventura.scrollLeft += filaAventura.offsetWidth;
});

document.getElementById('flecha-izquierda-Es').addEventListener('click', () => {
	filaEstrategia.scrollLeft -= filaEstrategia.offsetWidth;
});
document.getElementById('flecha-derecha-Es').addEventListener('click', () => {
	filaEstrategia.scrollLeft += filaEstrategia.offsetWidth;
});


const gameClick = document.querySelectorAll('.juego');
for(let i=0; i<gameClick.length; i++){
  gameClick[i].addEventListener("click",() => {
    let id = parseInt(gameClick[i].querySelector('p').textContent);
    let gameModal = games.find(element => element.id === id);
    document.getElementById('gameModal').innerHTML = 
    `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header text-center">
            <h1 class="modal-title fs-5" id="exampleModalLabel">${gameModal.title}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <img src="${gameModal.url}" width="100%" style="border:solid #fff 2px;border-radius:10px;">
            <p class="mt-3">${gameModal.description.slice(0, 300) + "..."}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button class="btn" id="verMas" style="background-color: #2c74b3;">Ver más</button>
          </div>
        </div>
      </div>
    </div>
    `;
    document.getElementById('startModal').click();

    document.getElementById('verMas').addEventListener("click",()=>{
      localStorage.setItem('gamePag', JSON.stringify(gameModal));
      window.location = './gamePage.html';
    })
  });
}

const logout = ()=>{
  localStorage.removeItem('UserLog');
  window.location = './login.html';
}


