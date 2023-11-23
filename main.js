  var typed = new Typed(".textt",
  {
      strings:["Undergraduate..."],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop:false
  }
  );
  
const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

