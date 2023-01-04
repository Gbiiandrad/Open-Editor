const livros = require('./listaLivros');
const menorValor = require('./menorValor');

for (let atual = 0; atual < livros.length - 1; atual++) {

    //verificar qual é o menor valor
    let menor = menorValor(livros, atual);

    // irá guarda uma informção (dado).
    let livroAtual =  livros[atual];
    console.log('posição atual', atual);
    console.log('Livro atual é ', livros[atual]);

    let livroMenorPreco = livros[menor];
    console.log('Livro menor preço é ', livros[menor]);

    //trocando de lugar
    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
}

console.log(livros);