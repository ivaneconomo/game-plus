const userLogueado = JSON.parse(localStorage.getItem('UserLog'));

const comprobaruser = (usser)=>{
  if(usser == undefined){
    window.location = './login.html';
  }else if (usser.email != 'admin123@gmail.com' && usser.password != 'admin159'){
    window.location = './login.html';
  }
} 

comprobaruser(userLogueado);

const users = JSON.parse(localStorage.getItem('Users'));
let posts = JSON.parse(localStorage.getItem('Posts'));

let userCant = document.createElement('p')
userCant.innerHTML= `${users.length-1}`;
document.getElementById('usuCant').appendChild(userCant);

let postCant = document.createElement('p')
postCant.innerHTML= `${posts.length}`;
document.getElementById('postCant').appendChild(postCant);

const MoElDe = () =>{
  const postClick = document.querySelectorAll('.bgPos');
  for(let i=0 ; i<postClick.length; i++){
    let id = parseInt(postClick[i].querySelector('span').textContent);
    document.getElementById(`postModId${id}`).addEventListener("click", ()=>{
      let postModal = posts.find(element => element.id === id);
      document.getElementById('postModal').innerHTML = 
      `
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content bg">
            <div class="modal-header text-center">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modificar: ->${postModal.title}<-</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="titleExample">Título:</label>
                <input maxlength="50" type="text" class="form-control mt-2 text-dark" id="titleExample" placeholder="${postModal.title}">
              </div>
              <div class="mb-3">
                <label for="floatingTextarea2">Descripción:</label>
                <textarea class="form-control mt-2 text-dark" placeholder="${postModal.description.slice(0, 100) + "..."}" id="floatingTextarea2" style="height: 90px"></textarea>
              </div>
              <div class="mb-3">
                <label for="selectExample">Categoria:</label>
                <select class="form-select mt-2" aria-label="Default select example" id="selectExample" style="cursor:pointer;">
                  <option value="accion">Acción</option>
                  <option value="deportes">Deportes</option>
                  <option value="aventura">Aventura</option>
                  <option value="estrategia">Estrategia</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="urlExample">Url de portada:</label>
                <input type="text" class="form-control mt-2 text-dark" id="urlExample" placeholder="${postModal.url}">
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button class="btn botones" id="modificar">Modificar</button>
            </div>
          </div>
        </div>
      </div>
      `;
      document.getElementById('startModal').click();

      document.getElementById('modificar').addEventListener("click", ()=>{
        let newTitle = document.getElementById('titleExample').value == '' ? postModal.title : document.getElementById('titleExample').value;
        let newDesc = document.getElementById('floatingTextarea2').value == '' ? postModal.description : document.getElementById('floatingTextarea2').value;
        let newCateg = document.getElementById('selectExample').value == '' ? postModal.category : document.getElementById('selectExample').value;
        let newUrl = document.getElementById('urlExample').value == '' ? postModal.url : document.getElementById('urlExample').value;
        const indice = posts.indexOf(postModal);
        posts[indice].title = newTitle;
        posts[indice].description = newDesc;
        posts[indice].category = newCateg;
        posts[indice].url = newUrl;
        localStorage.setItem('Posts', JSON.stringify(posts));
        window.location.reload();
      });
    }); 
    document.getElementById(`postEliId${id}`).addEventListener("click", ()=>{
      let post = posts.find(element => element.id === id);
      const indic = posts.indexOf(post);
      Swal.fire({
        title: `Estas seguro que deseas eliminar ${post.title}`,
        text: "Una vez eliminado no se podrá revertir",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar!'
      }).then((result) => {
        if (result.isConfirmed) {
          if(post.destacado == false){
            posts.splice(indic,1);
            localStorage.setItem('Posts', JSON.stringify(posts));
            Swal.fire(
              'Eliminado!',
              'Tu post fué eliminado!',
              'Hecho'
            ).then((result) => {if(result.isConfirmed){window.location.reload()}})
          }else{
            Swal.fire(
              'No fué eliminado!',
              'Tu post está destacado, no puede eliminarse',
              'Error'
            )
          }
        }
      })
    });
    document.getElementById(`postDesId${id}`).addEventListener("click", ()=>{
      let postnewDes = posts.find(element => element.id === id);
      let postdes = posts.find(element => element.destacado === true);
      const indicpostNew = posts.indexOf(postnewDes);
      const indicpostOld = posts.indexOf(postdes);
      Swal.fire({
        title: `Quieres destacar ${postnewDes.title}?`,
        text: `Cambiarás destacado de "${postdes.title}" para destacar "${postnewDes.title}"`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, Destacar!'
      }).then((result) => {
        if (result.isConfirmed) {
          if(postnewDes.destacado == false){
            posts[indicpostOld].destacado = false;
            posts[indicpostNew].destacado = true;
            localStorage.setItem('Posts', JSON.stringify(posts));
            Swal.fire(
              'Destacado!',
              'Tu post fué destacado!',
              'Hecho'
            ).then((result) => {if(result.isConfirmed){window.location.reload()}})
          }else{
            Swal.fire(
              'Este post ya está destacado!',
              'Tu post está destacado, no puede destacarse de nuevo',
              'Error'
            )
          }
        }
      })
    });
  }
}

const primerosPost = () =>{
  for(let i=posts.length-1; i>posts.length-6; i--){
    let destacado;
    if(posts[i].destacado == true){
      destacado = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning d-none d-md-inline" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>`;
    }else if(posts[i].destacado == false){
      destacado = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>`;
    }
    let identificador = `<p class="d-none"></p>`;
    if(i == posts.length-5){
      identificador = `<p class="d-none" id="ultimoPost">5</p>`;
    };
    let card = document.createElement('div');
    card.className = 'col-12 rounded border border-2 border-white mb-2 text-white p-3 bgPos';
    card.innerHTML = `
    <div class="mb-2">
      <h5 class="me-2 d-inline">Título:</h5>
      <p class="d-inline">${posts[i].title}</p>
    </div>
    <div class='mb-2'>
      <h5 class="me-2 d-inline">Descripcion resumida:</h5>
      <p class="d-inline">${posts[i].description.slice(0, 100) + "..."}</p>
    </div>
    <div class='d-flex mb-2'>
      <h5 class="me-2">Destacado:</h5>
      <h5 class="text-danger">${destacado}</h5>
    </div>
    <div class='mb-2 contenidoPost'>
      <h5 class="me-2 d-inline">Url de portada:</h5>
      <a class="d-inline href="${posts[i].url}" target="_blank">${posts[i].url}</a>
    </div>
    <div>
      <h5 class="me-2 d-inline">Categoria:</h5>
      <p class="d-inline">${posts[i].category}</p>
      ${identificador}
      <span class="d-none">${posts[i].id}<\span>
    </div>
    <div class="mt-2 d-flex justify-content-center justify-content-md-start flex-wrap">
      <button class="btn botones me-1 me-md-2" id="postModId${posts[i].id}">Modificar</button>
      <button class="btn botones me-1 me-md-2" id="postEliId${posts[i].id}">Eliminar</button>
      <button class="btn botones" id="postDesId${posts[i].id}">Destacar</button>
    </div>
    `;
    document.getElementById('posts').appendChild(card);
  }
  MoElDe();
}

primerosPost();

const Vermaspost = () =>{
  const n = parseInt(document.getElementById('ultimoPost').textContent);
  const ultimoId = posts.length - n;
  document.getElementById('posts').classList.add('postsScroll')
  if(ultimoId != 0){
    document.getElementById('ultimoPost').removeAttribute('id', 'ultimoPost');
  }
  let contador = 0;
  for(let i=ultimoId-1; i>=ultimoId-5; i--){
    if(i >= 0){
      
      contador++;
      let destacado;
      if(posts[i].destacado == true){
        destacado = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning d-none d-md-inline" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>`;
      }else if(posts[i].destacado == false){
        destacado = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>`;
      }
    
      let identificador = `<p class="d-none"></p>`;
      if(i == ultimoId-5 || i == 0){
        identificador = `<p class="d-none" id="ultimoPost">${contador+n}</p>`;
      };
  
      let card = document.createElement('div');
      card.className = 'col-12 rounded border border-2 border-white mb-2 text-white p-3 bgPos';
      card.innerHTML = `
      <div class="mb-2">
        <h5 class="me-2 d-inline">Título:</h5>
        <p class="d-inline">${posts[i].title}</p>
      </div>
      <div class='mb-2'>
        <h5 class="me-2 d-inline">Descripcion resumida:</h5>
        <p class="d-inline">${posts[i].description.slice(0, 100) + "..."}</p>
      </div>
      <div class='d-flex mb-2'>
        <h5 class="me-2">Destacado:</h5>
        <h5 class="text-danger">${destacado}</h5>
      </div>
      <div class='mb-2 contenidoPost'>
        <h5 class="me-2 d-inline">Url de portada:</h5>
        <a class="d-inline" href="${posts[i].url}" target="_blank">${posts[i].url}</a>
      </div>
      <div>
        <h5 class="me-2 d-inline">Categoria:</h5>
        <p class="d-inline">${posts[i].category}</p>
        ${identificador}
        <span class="d-none">${posts[i].id}<\span>
      </div>
      <div class="mt-2">
        <button class="btn botones" id="postModId${posts[i].id}">Modificar</button>
        <button class="btn botones" id="postEliId${posts[i].id}">Eliminar</button>
        <button class="btn botones" id="postDesId${posts[i].id}">Destacar</button>
      </div>
      `;
      document.getElementById('posts').appendChild(card);
    }else{
      break;
    }
  }
  MoElDe();
}

document.getElementById("inputSearch").addEventListener("input", function() {
  const searchText = this.value.toLowerCase();

  const postFiltrados = posts.filter((item) => {
    let title = item.title.toLowerCase()
    return title.includes(searchText);
  });

  document.getElementById('posts').innerHTML = "";

  if(searchText == ''){
    document.getElementById('buttonvermas').classList.replace('d-none', 'd-flex');
    document.getElementById('posts').classList.remove('postsScroll');
    primerosPost();
  }else if(postFiltrados.length != 0){
    postFiltrados.forEach((item)=>{
      let destacado;
      if(item.destacado == true){
        destacado = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning d-none d-md-inline" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>`;
      }else if(item.destacado == false){
        destacado = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>`;
      }
  
      const buscados = document.createElement("div");
      buscados.className = 'col-12 rounded border border-2 border-white mb-2 text-white p-3 bgPos';
      buscados.innerHTML = `
      <div class="mb-2">
        <h5 class="me-2 d-inline">Título:</h5>
        <p class="d-inline">${item.title}</p>
      </div>
      <div class='mb-2'>
        <h5 class="me-2 d-inline">Descripcion resumida:</h5>
        <p class="d-inline">${item.description.slice(0, 100) + "..."}</p>
      </div>
      <div class='d-flex mb-2'>
        <h5 class="me-2">Destacado:</h5>
        <h5 class="text-danger">${destacado}</h5>
      </div>
      <div class='mb-2 contenidoPost'>
        <h5 class="me-2 d-inline">Url de portada:</h5>
        <a class="d-inline" href="${item.url}" target="_blank">${item.url}</a>
      </div>
      <div>
        <h5 class="me-2 d-inline">Categoria:</h5>
        <p class="d-inline">${item.category}</p>
        <span class="d-none">${item.id}<\span>
      </div>
      <div class="mt-2">
        <button class="btn botones" id="postModId${item.id}">Modificar</button>
        <button class="btn botones" id="postEliId${item.id}">Eliminar</button>
        <button class="btn botones" id="postDesId${item.id}">Destacar</button>
      </div>
      `;
      document.getElementById('posts').appendChild(buscados);
    });
    document.getElementById('buttonvermas').classList.replace('d-flex', 'd-none')
    if(postFiltrados.length > 5){
      document.getElementById('posts').classList.add('postsScroll');
      MoElDe();
    }else{
      document.getElementById('posts').classList.remove('postsScroll');
      MoElDe();
    }
  }else{
    document.getElementById('posts').innerHTML = '<h4 class="mt-3 text-white text-center">Sin resultados</h4>';
    document.getElementById('posts').classList.remove('postsScroll');
  }
});

const searchButton = document.getElementById("buttonSearch").addEventListener("click", function() {
  const searchText = document.getElementById('inputSearch').value.toLowerCase();
  
  const postFiltrados = posts.filter((item) => {
    let title = item.title.toLowerCase()
    return title.includes(searchText);
  });

  document.getElementById('posts').innerHTML = "";

  if(searchText == ''){
    document.getElementById('buttonvermas').classList.replace('d-none', 'd-flex');
    document.getElementById('posts').classList.remove('postsScroll');
    primerosPost();
  }else if(postFiltrados.length != 0){
    postFiltrados.forEach((item)=>{
      let destacado;
      if(item.destacado == true){
        destacado = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning d-none d-md-inline" viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>`;
      }else if(item.destacado == false){
        destacado = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>`;
      }
  
      const buscados = document.createElement("div");
      buscados.className = 'col-12 rounded border border-2 border-white mb-2 text-white p-3 bgPos';
      buscados.innerHTML = `
      <div class="mb-2">
        <h5 class="me-2 d-inline">Título:</h5>
        <p class="d-inline">${item.title}</p>
      </div>
      <div class='mb-2'>
        <h5 class="me-2 d-inline">Descripcion resumida:</h5>
        <p class="d-inline">${item.description.slice(0, 100) + "..."}</p>
      </div>
      <div class='d-flex mb-2'>
        <h5 class="me-2">Destacado:</h5>
        <h5 class="text-danger">${destacado}</h5>
      </div>
      <div class='mb-2 contenidoPost'>
        <h5 class="me-2 d-inline">Url de portada:</h5>
        <a class="d-inline" href="${item.url}" target="_blank">${item.url}</a>
      </div>
      <div>
        <h5 class="me-2 d-inline">Categoria:</h5>
        <p class="d-inline">${item.category}</p>
        <span class="d-none">${item.id}<\span>
      </div>
      <div class="mt-2">
        <button class="btn botones" id="postModId${item.id}">Modificar</button>
        <button class="btn botones" id="postEliId${item.id}">Eliminar</button>
        <button class="btn botones" id="postDesId${item.id}">Destacar</button>
      </div>
      `;
      document.getElementById('posts').appendChild(buscados);
    });
    document.getElementById('buttonvermas').classList.replace('d-flex', 'd-none')
    if(postFiltrados.length > 5){
      document.getElementById('posts').classList.add('postsScroll');
      MoElDe();
    }else{
      document.getElementById('posts').classList.remove('postsScroll');
      MoElDe();
    }
  }else{
    document.getElementById('posts').innerHTML = '<h4 class="mt-3 text-white text-center">Sin resultados</h4>';
    document.getElementById('posts').classList.remove('postsScroll');
  }
});

const logout = ()=>{
  localStorage.removeItem('UserLog');
  window.location = './login.html';
}

const modalAlta = ()=>{
  document.getElementById('modalAlta').innerHTML = 
  `
  <div class="modal fade" id="exampleModalAlta" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content bg">
        <div class="modal-header text-center">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Dar alta juego</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="titleJuego">Título:</label>
            <input maxlength="50" type="text" class="form-control mt-2 text-dark" id="titleJuego" placeholder="title example">
          </div>
          <div class="mb-3">
            <label for="descripcionJuego">Descripción:</label>
            <textarea class="form-control mt-2 text-dark" placeholder="description example" id="descripcionJuego" style="height: 90px"></textarea>
          </div>
          <div class="mb-3">
            <label for="selectJuego">Categoria:</label>
            <select class="form-select mt-2" aria-label="Default select example" id="selectJuego" style="cursor:pointer;">
              <option value="accion">Acción</option>
              <option value="deportes">Deportes</option>
              <option value="aventura">Aventura</option>
              <option value="estrategia">Estrategia</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="urlJuego">Url de portada:</label>
            <input type="text" class="form-control mt-2 text-dark" id="urlJuego" placeholder="urlExample.com/img.jpg">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button class="btn botones" onclick="altaJuego()">Postear</button>
        </div>
      </div>
    </div>
  </div>
  `;
  document.getElementById('ModalAltaJuego').click();

}

const altaJuego = () =>{
  const titlee= document.getElementById('titleJuego').value;
  const descriptionn= document.getElementById('descripcionJuego').value;
  const categoryy= document.getElementById('selectJuego').value;
  const urll = document.getElementById('urlJuego').value;
  if(titlee != '' && descriptionn != '' && categoryy != '' && urll != ''){
    const ultiID = posts[posts.length-1].id;
    const newId = ultiID+1;
    const newPost ={
      title: titlee,
      description: descriptionn,
      url: urll,
      category: categoryy,
      destacado: false,
      id: newId
    }
    posts.push(newPost);
    localStorage.setItem('Posts', JSON.stringify(posts));
    window.location.reload();
  }else{
    Swal.fire('Completa todos los campos');
  }
};