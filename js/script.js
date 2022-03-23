// document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.work__btn').forEach(function(tabsBtn){
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.tab-content').forEach(function(tabContent){
                tabContent.classList.remove('tab-content--active')
                
            })
            document.querySelector(`[data-target=${path}]`).classList.add('tab-content--active')
        })
        

    })

var swiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 4000,
    }, 
    pagination: {
        el: '.swiper-pagination',
    },
    allowTouchMove: true,
    loop: true,
});

document.querySelectorAll('.accordion-icon').forEach(function(iconBtn){
    iconBtn.addEventListener('click', function(event) {
        const path = event.currentTarget.dataset.path
        console.log(path);
        document.querySelectorAll('.questions__content').forEach(function(QUESContent){
            QUESContent.classList.remove('ques-content--active')
            // document.querySelector(`[data-target=${path}]`).classList.add('ques-content--active')
        })
        document.querySelector(`[data-target=${path}]`).classList.add('ques-content--active')
    })

})


$( function() {
    $( "#accordion" ).accordion({
        collapsible: true,
        active: false,
    });
  } );


  const burgerBtn = document.querySelector('.burger');
  const menuClose = document.querySelector('.menu-close');
  const menuBurger = document.querySelector('.nav');
  
  burgerBtn.addEventListener('click', () => {
      menuBurger.classList.add('burger-active');
  });
  
  menuClose.addEventListener('click', () => {
      menuBurger.classList.remove('burger-active');
  });
  