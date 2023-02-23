const modo = () =>{
  const modoDef = JSON.parse(localStorage.getItem('ModeDL'));
  if(modoDef.mode == 'light'){
    document.querySelector('body').classList.replace('bodyBgDark','bodyBgLight');
    document.querySelector('nav').classList.replace('navBgDark','navBgLight');
    let cardsL = document.querySelectorAll('.bgCards');
    for(let i=0 ;i<cardsL.length;i++){cardsL[i].classList.replace('bgCards','bgCardsLight');};
    document.querySelector('main').classList.replace('text-white','text-dark');
    let textEs = document.querySelectorAll('.labelText')
    for(let i=0 ;i<textEs.length;i++){textEs[i].classList.replace('text-white','text-dark');};
    let botones = document.querySelectorAll('.botones')
    for(let i=0 ;i<botones.length;i++){botones[i].classList.replace('botones','btn-primary');};
    let carrouseles = document.querySelectorAll('.contenedorBgDark')
    for(let i=0 ;i<carrouseles.length;i++){carrouseles[i].classList.replace('contenedorBgDark','contenedorBgLight');};
    let posts = document.querySelectorAll('.bgPos')
    for(let i=0 ;i<posts.length;i++){posts[i].classList.replace('bgPos','bgPosLight');};
    let cardGrad = document.querySelectorAll('.bgCardsGrad');
    for(let i=0 ;i<cardGrad.length;i++){cardGrad[i].classList.replace('bgCardsGrad','bgCardsGradLight');}
  }else{
    document.querySelector("body").classList.replace('bodyBgLight','bodyBgDark');
    document.querySelector('nav').classList.replace('navBgLight','navBgDark');
    document.getElementById('modeDarkLight').setAttribute('checked', '');
    let cardsD = document.querySelectorAll('.bgCardsLight');
    for(let i=0 ;i<cardsD.length;i++){cardsD[i].classList.replace('bgCardsLight', 'bgCards');};
    document.querySelector('main').classList.replace('text-dark','text-white');
    let textEs = document.querySelectorAll('.labelText')
    for(let i=0 ;i<textEs.length;i++){textEs[i].classList.replace('text-dark','text-white');};
    let botones = document.querySelectorAll('.btn-primary')
    for(let i=0 ;i<botones.length;i++){botones[i].classList.replace('btn-primary','botones');};
    let carrouseles = document.querySelectorAll('.contenedorBgLight')
    for(let i=0 ;i<carrouseles.length;i++){carrouseles[i].classList.replace('contenedorBgLight','contenedorBgDark');};
    let posts = document.querySelectorAll('.bgPosLight')
    for(let i=0 ;i<posts.length;i++){posts[i].classList.replace('bgPosLight','bgPos');};
    let cardGrad = document.querySelectorAll('.bgCardsGradLight');
    for(let i=0 ;i<cardGrad.length;i++){cardGrad[i].classList.replace('bgCardsGradLight','bgCardsGrad');}
  }
}

modo();

document.getElementById('modeDarkLight').addEventListener('click',()=>{
  let modActual = JSON.parse(localStorage.getItem('ModeDL'));
  let modNew;
  if(modActual.mode == 'light'){
    modNew = JSON.stringify({
      mode: 'dark'
    });
    localStorage.setItem('ModeDL', modNew);
    modo();
  }else{
    modNew = JSON.stringify({
      mode: 'light'
    });
    localStorage.setItem('ModeDL', modNew);
    modo();
  }
});

