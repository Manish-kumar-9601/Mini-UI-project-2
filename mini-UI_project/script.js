const nav = document.querySelector('.robot-hand')

 
addEventListener("scroll", () => {
  let value = window.scrollY;
  console.log(value)
   nav.style.left= value+270 + "px";

});
