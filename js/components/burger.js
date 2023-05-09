// функция работы гамбургера
function ham(){
  const ham=document.querySelector('.hamburger');
  const menu=document.querySelector('.menu');
  const body=document.querySelector('body');
  function toggleMenu(){
      ham.classList.toggle('active');
      menu.classList.toggle('is-active');    
      body.classList.toggle('locked'); 
  }
  ham.addEventListener('click',function(e){
  e.preventDefault();  
  toggleMenu();
  })  
  menu.addEventListener('click',function(e){  
    let target=e.target;
    if (target.className==='menu__link') {    
      toggleMenu();
    }       
  })    
  };
  ham();