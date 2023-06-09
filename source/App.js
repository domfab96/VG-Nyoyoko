$(document).ready(function(){
  var typed = new Typed(".typing-1", {
    strings: [
      "Lecturer", "Priest", "Philantropist", "Father", "Lecturer"
    ],
    typeSpeed: 80,
    backSpeed:60,
    loop:true
  });


});






const open = document.getElementById('open');
const article_modal = document.getElementById('article_modal');
const close = document.getElementById('close');


open.addEventListener('click', () => {
  article_modal.classList.add('show');
})

close.addEventListener('click', () => {
  article_modal.classList.remove('show');
})