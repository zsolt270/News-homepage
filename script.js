const btnOpen = document.getElementById("button-open");
const btnClose = document.getElementById("button-close");
const headerNav = document.querySelector("header nav");

btnOpen.addEventListener('click',function(e){
    headerNav.classList.add("open");
});
btnClose.addEventListener('click',function(e){
    headerNav.classList.remove("open");
});

console.log(btnOpen);
console.log(btnClose);
console.log(headerNav);
