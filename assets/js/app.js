(function(){
    const openButton = document.querySelector('.nav-menu');
    const menu = document.querySelector('.nav-links');
    const closeMenu = document.querySelector('.nav-close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav-links--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav-links--show');
    });

})();