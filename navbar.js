window.addEventListener('scroll',function(){
    let nav = document.querySelector('nav');
    nav.classList.toggle("stikcy" , window.scrollY > 0);
})

const button = document.querySelector('#mobile-view');
const navLinks = document.querySelector('.nav-links ul');

button.addEventListener('click',function(){
    navLinks.classList.toggle('active')
})

console.log(button);
console.log(navLinks);

console.log(listCard);