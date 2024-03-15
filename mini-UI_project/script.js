const nav = document.querySelector(".robot-hand");
const SelectOption = document.getElementById("pay_methods");
const btn = document.getElementById("selector-arrow");

addEventListener("scroll", () => {
  let value = window.scrollY;
  console.log(value);
  let width = window.innerWidth;
  if (width < 1440) {
    nav.style.left = value + 270 + "px";
  }
});
const toggle=()=>{
SelectOption.classList.toggle('active')
}