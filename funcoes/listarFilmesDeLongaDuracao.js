function listarFilmesDeLongaDuracao(catalogo) {
    catalogo.forEach((filme) => {
        filme.duracao >= 120 ? console.log(filme) : ''
    })
}

module.exports = listarFilmesDeLongaDuracao