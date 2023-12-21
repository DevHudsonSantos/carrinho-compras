let valorTotal;

let listaCarrinho = document.getElementById('lista-produtos');

let carrinho = document.getElementsByClassName('carrinho__produtos__produto');

limpar();


function adicionar(){

    // recuperar valores: nome do produto, quantidade e valor;
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    // calcular o preço, subtotal
    let preço = valorUnitario * quantidade;
    
    // adcionar o carrinho;
    

    if (quantidade <= 0){
        
        alert('Favor selecionar a quantidade')
        listaCarrinho = '';
    } else{
        listaCarrinho.innerHTML = listaCarrinho.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
        </section>`;
    }

    // calcular o valor total;
    valorTotal = valorTotal + preço;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.innerHTML = `R$: ${valorTotal}`;
    document.getElementById('quantidade').value = '';

}

function limpar(){
  
    valorTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';

}

function finalizar(){

    if(valorTotal == 0 ){
        alert("Nenhum item no carrinho");
    } else{
        alert('Sua compra foi finalizada com sucesso');
    }
    
}