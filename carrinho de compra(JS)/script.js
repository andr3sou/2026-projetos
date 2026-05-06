//produtos que ira aparecer na loja
const produtosLoja = [
    { id: 1, nome: "notebook", preco: 300 },
    { id: 2, nome: "mouse", preco: 100 },
    { id: 3, nome: "teclado", preco: 140 },  
    { id: 4, nome: "Placa de video", preco: 14000 }  
];

//mostrar os produtos 

let produtosCarrinho = [];

function renderizarProduto(){
    let lista = document.getElementById("lista-produtos");
    lista.innerHTML = " ";

    produtosLoja.forEach(produto => {
        let div = document.createElement("div");
        div.className = "product";

        div.innerHTML = `
        <span>${produto.nome} - R$ ${produto.preco}<\span>
        <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar</button>
        `;
        lista.appendChild(div);
    });
}



renderizarProduto();

function adicionarAoCarrinho(id){
    const produto = produtosLoja.find(prod => prod.id == id);
    
    const existente = produtosCarrinho.find(prod => prod.id === id);

    if(existente){
        existente.quantidade++;

    }
    else{
        produtosCarrinho.push(
            {
                id: produto.id,
                nome: produto.nome,
                preco: produto.preco,
                quantidade: 1
            }
        );

    }
}

function renderizarCarrinho() {
    const lista = document.getElementById("lista-carrinho")
    const total = document.getElementById("total")

    lista.innerHTML = "";

    let somaTotal = 0;

    produtosCarrinho.forEach( produto => {
        somaTotal = somaTotal + (produto.preco + produto.quantidade);

        const div = document.createElement("div");
        div.className = "cart-item"

        div.innerHTML `
            
        
        `;

    });
}
