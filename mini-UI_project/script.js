const robotHand = document.querySelector(".robot-hand");
const SelectOption = document.getElementById("pay_methods");
const btn = document.getElementById("selector-arrow");
const menuIcon = document.getElementsByClassName("menu-icon")[0];
const menuImg = document.getElementById("menu-icon-img");
const menuArea = document.querySelector(".nav_link");
const link_btn = document.querySelectorAll(".nav_link a");
const sidebar=document.querySelector('aside');
const menu=document.querySelector('.menu');
const menuopen=document.querySelector('.menu-open');
menuopen.style.background='none'
menuArea.style.padding = "0";
menuArea.style.border = "none";
// let screenWidth = window.innerWidth;

let e;
 
const menufun=()=>{
  let toggle;
  console.log(menuIcon);
  e = !e;
  console.log(e, "toggle");
  if (e) {
    menuImg.src = "icons8-x-64.png";
    menuopen.style.background='linear-gradient(157.81deg,#def9fa -43.27%,#bef3f5 -21.24%,#9dedf0 12.19%,#7de7eb 29.82%,#5ce1e6 51.94%,#33bbcf 90.29%)'
    menuArea.style.padding = "10px";
    menuArea.style.border = "2px";
    sidebar.style.display='block';
    toggle = "block";
  } else {
    menuImg.src = "icons8-menu-48.png";
    toggle = "none";
    menuopen.style.background='none'
     
    sidebar.style.display='none';
    menuArea.style.padding = "0px";
    menuArea.style.border = "0px";
  }
  for (let i = 0; i <= 3; i++) {
    document.querySelectorAll(".link-btn")[i].style.display = toggle;
  }
}
menuIcon.addEventListener("click", () => {
 menufun();
});
  menu.addEventListener('focusout', ()=>{
  
    e=false;
    sidebar.style.display='none';
    menuImg.src = "icons8-menu-48.png";
    menuopen.style.background='none'
    })
  