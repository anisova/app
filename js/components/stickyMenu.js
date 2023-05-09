  //функция плавающего меню вариант 1
//   function menuFixed() {
//     window.onscroll = function () {
//       const menu = document.querySelector('.menu');
//       const back = document.querySelector('.sticky-back');
//       let sticky = menu.offsetTop;
//       if (window.pageYOffset > sticky) {
//         menu.classList.add("sticky");
//         const stickyMenu = document.querySelector('.sticky');        
//           back.style.visibility = 'visible';
//           back.style.opacity = '1';        
//         stickyMenu.style.opacity = '1';
//       } else {
//         menu.classList.remove("sticky");
//         back.style.visibility = 'hidden';
//         back.style.opacity = '0';
//       }
//     };
//   }
  //end of menuFixed()
//   menuFixed();
//Работа header, который прилипает при пролистывании, вариант 2
window.onload = function() {
    const headerElement = document.querySelector('.header');
    const callback = function (entries,observer) {
        if (entries[0].isIntersecting) {
            headerElement.classList.remove('scroll');
        } else {
            headerElement.classList.add('scroll');            
        }
    }
    const headerObserver = new IntersectionObserver(callback);
    headerObserver.observe(headerElement);
}
//функция плавной прокрутки к секции с подсветкой пункта меню текущей секции
    function scrollToSection() {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              document.querySelectorAll('.menu__link').forEach((link) => {
                link.classList.toggle('active', link.getAttribute('href').replace('#', '') === entry.target.id);
              })
            }
          })
        }, {            
          threshold: 0.6, //число подбирается в зависимости от того, какой процент контента секции должен появиться в области видимости
        });
        document.querySelectorAll('.section').forEach((section) => {
          observer.observe(section);
        })
        document.querySelector('.menu__list').addEventListener('click', (e) => {
          if (e.target.classList.contains('menu__link')) {
            e.preventDefault();
            const id = e.target.getAttribute('href').replace('#', '');
            window.scrollTo({
              top: document.getElementById(id).offsetTop - document.querySelector('.header').offsetHeight,
              behavior: "smooth"
            });
          }
        })
      }
      //end of scrollToSection()
      scrollToSection();

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