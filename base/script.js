const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");

btnLogin.addEventListener("click", event => {
    event.preventDefault();
    form.classList.add("form-hide");
});

form.addEventListener("animationstart", event =>{
    if(event.animationName == "move-down"){
        document.querySelector("body").style.overflow = "hidden";
    }
});

form.addEventListener("animationend", event => {
    if(event.animationName == "move-down"){
    form.style.display = "none";
    document.querySelector("body").style.overflow = "none";

    }
});