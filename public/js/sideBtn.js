let spanBtn = document.querySelector(".spanBtn");
let side = document.querySelector(".sideM");
let btn2 = document.querySelector(".btn2")

spanBtn.addEventListener("click",function(){
    side.classList.toggle("move");
    spanBtn.classList.toggle("chg");


});
btn2.addEventListener("click",function(){
    side.classList.toggle("move");
});



