// const navbar = document.querySelector('.list');


// let toggleNavbar=() =>{
//     alert("saloni");
// }
// navbar.addEventListener('click',  () => toggleNavbar())





let loginpopup = document.querySelector(".function");

window.addEventListener("load", function(){
    showpopup();
})

function showpopup(){
    const timeLimit = 1 //second;
    let i=0;
    const timer =setInterval(function(){
        i++;
        if(i==timeLimit){
            clearInterval(timer);
            loginpopup.classList.add("show");
        }
        console.log(i)
    },1000)
}


