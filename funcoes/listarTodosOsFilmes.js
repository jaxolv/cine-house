function listarTodosOsFilmes(catalogo) {
    catalogo.forEach((filme) => {
        console.log(`O filme "${filme.titulo}", lançado em ${filme.anoDeLancamento}, tem ${filme.duracao} minutos de duração. Em seu elenco, estão os atores ${filme.atores}. Em nosso catálogo, a película pode ser encontrada pelo código ${filme.codigo}. No momento, o filme${filme.emCartaz == false ? ' não ' : ' '}está em cartaz.\n`)
    });
}

module.exports = listarTodosOsFilmes