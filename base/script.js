const btnLogin = document.querySelector(".btn-login"); // pegar o elemento botão e armazena na variável btnLogin
const form = document.querySelector("form"); // pega o form

// Toda vez que executa o click, executa o evento abaixo
btnLogin.addEventListener("click", event => {
    event.preventDefault();

    // pegando todos os elementos de input e colocando num array
    const fields = [...document.querySelectorAll(".input-block input")];
    
    // para cada campo que ele passar ele verifica se o valor do campo é vazio
    fields.forEach(field => {
        if(field.value == "") form.classList.add("validate-error"); // caso seja vazia, adiciona a classe validate-error
    });

    // imediatamente depois do click, ele pega o form error e caso existir mesmo, adiciona o evento
    const formError = document.querySelector(".validate-error");
    if (formError){
        formError.addEventListener("animationend", event => {
            if(event.animationName == "no-no"){ // quando chegar ao fim da animação, remove
                formError.classList.remove("validate-error");
            }
        });
    }
    else{ // caso preencha os campos de login (não tiver formError),  a animação de esconder o form acontece
        form.classList.add("form-hide"); 
    }
});
// quando começar a animação coloca o body com overflow hiddden, para nao ter barra de rolagem quando esconder o form
form.addEventListener("animationstart", event =>{
    if(event.animationName == "move-down"){
        document.querySelector("body").style.overflow = "hidden";
    }
});
// quando chegar no fim da animação, ele não aparece mais.
form.addEventListener("animationend", event => {
    if(event.animationName == "move-down"){ // quando esse evento de animação ocorre, ele some
    form.style.display = "none";
    document.querySelector("body").style.overflow = "none"; // colocando o overflow do body ao normal 
    }
});


/* background squares */
const ulSquares = document.querySelector("ul.squares"); // pegando a tag dos quadrados

for (let i = 0; i < 20; i++){ // gerando 20 quadrados
    
    const li = document.createElement("li");

    // criando função pra gerar valores randomicos
    const random = (min, max) => Math.random() * (max - min) + min;

    const size = Math.floor(random(10, 120));
    const position = random(1, 99);
    const delay = random(5, 0.1);
    const duration = random(24, 12)

    // criando tamanho randomicos
    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}px`;

    // criando posição randomica
    li.style.left = `${position}%`

    // criando animação com valores randomicos
    li.style.animationDelay = `${delay}s`
    li.style.animationDuration = `${duration}s`
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;

    ulSquares.appendChild(li);
}