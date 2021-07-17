var abrirmodal=document.querySelectorAll("[data-open]");
var cerrarmodal=document.querySelectorAll("[data-close]");
var ventanamodal=document.getElementById("modal");
var parrafocabecera=document.getElementById("parrafocabecera");
var imagenmodal=document.getElementById("imagenmodal");
var parrafopie=document.getElementById("parrafopie");
var i=-1;
var isvisible = "is-visible";

for(i=0; i<abrirmodal.length;i++){
    abrirmodal[i].addEventListener("click", function(){
    var modalid=this.dataset.open;
    switch(modalid){
        case "modal1":
            ventanamodal.classList.add(isvisible);
            imagenmodal.setAttribute("src", "img/bulldog.jpg");
            imagenmodal.setAttribute("alt","Imagen 1");
            break;
            case "modal2":
                ventanamodal.classList.add(isvisible);
                imagenmodal.setAttribute("src", "img/conejo enano holandes.jpg");
                imagenmodal.setAttribute("alt","Imagen 2");
                break;
                case "modal3":
                    ventanamodal.classList.add(isvisible);
                    imagenmodal.setAttribute("src", "img/Conejo sisasado de orejas lop.jpg");
                    imagenmodal.setAttribute("alt","Imagen 3");
                    break;
                    case "modal4":
                        ventanamodal.classList.add(isvisible);
                        imagenmodal.setAttribute("src", "img/Gran Danes.jpg");
                        imagenmodal.setAttribute("alt","Imagen 4");
                        break;
                    default:
                        break;
    }
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