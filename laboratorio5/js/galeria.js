var abrirmodal=document.querySelectorAll("[data-open]");
var cerrarmodal=document.querySelectorAll("[data-close]");
var isvisible = "is-visible";

for (var modal of abrirmodal){
    modal.addEventListener("click", function(){
        var modalid = this.dataset.open;
        document.getElementById(modalid).classList.add(isvisible);
    });

}

for (var modal of cerrarmodal){
    modal.addEventListener("click", function(){
        this.parentElement.parentElement.parentElement.classList.remove
        (isvisible);
    });

}

document.addEventListener("click",(e) =>{
    if(e.target == document.querySelector(".modal .is-visible")){
        document.querySelector(".modla is-visible").classList.remove(isvisible);    }
});