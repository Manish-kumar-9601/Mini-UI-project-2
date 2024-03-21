const robotHand = document.querySelector(".robot-hand");
const SelectOption = document.getElementById("pay_methods");
const btn = document.getElementById("selector-arrow");
const menuIcon = document.getElementsByClassName("menu-icon")[0];
const menuImg = document.getElementById("menu-icon-img");
const menuArea = document.querySelector(".nav_link");
const link_btn = document.querySelectorAll(".nav_link a");
menuArea.style.padding = "0";
menuArea.style.border = "none";
// let screenWidth = window.innerWidth;

let e;
menuIcon.addEventListener("click", () => {
  let toggle;
  console.log(menuIcon);
  e = !e;
  console.log(e, "toggle");

  if (e) {
    menuImg.src = "icons8-x-64.png";
    menuArea.style.padding = "10px";
    menuArea.style.border = "2px";
    toggle = "block";
  } else {
    menuImg.src = "icons8-menu-48.png";
    toggle = "none";
  }

  for (let i = 0; i <= 3; i++) {
    document.querySelectorAll(".link-btn")[i].style.display = toggle;
  }
});
// addEventListener("scroll", () => {
//   let value = window.scrollY;
//   console.log(value);
//   let width = window.innerWidth;
//   if (width < 1440) {
//     robotHand.style.left = value + 270 + "px";
//   }
// });
