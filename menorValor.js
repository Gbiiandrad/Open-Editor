const arrProdutos = require ('./listaLivros');

function menorValor(arrProdutos, posicaoInicial) {

    //
    let maisBarato = posicaoInicial;

    for (let atual = posicaoInicial; atual < arrProdutos.length; atual ++ ) {
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco ) {
            maisBarato = atual;
        }
    }

    return maisBarato;

}
// para poder importar e usalo em outras parte
module.exports = menorValor;