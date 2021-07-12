window.addEventListener('scroll',function(){
    let nav = document.querySelector('nav');
    nav.classList.toggle("stikcy" , window.scrollY > 0);
})