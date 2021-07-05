const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");

btnHamburger.addEventListener('click', function(){
  console.log("aa");
  if(header.classList.contains('open')){ // close hamburguer toggle
    header.classList.remove('open');
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');
  }
  else { // open hamburguer toggle
    header.classList.add('open');
    overlay.classList.remove('fade-out');
    overlay.classList.add('fade-in');
  }
})