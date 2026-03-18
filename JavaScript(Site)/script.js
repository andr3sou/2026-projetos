let botaoAlerta = document.getElementById("button-alert");
console.log(botaoAlerta);

function gerarAlerta(){
    alert("Não vai dar miga ):")
}

botaoAlerta.addEventListener("click", function(){
    let novoElemento = document.createElement("p");
    novoElemento.textContent = "la ";
    document.body.appendChild(novoElemento);

});
