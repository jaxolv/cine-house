function listarFilmesEmCartaz(catalogo) {
    for (let i = 0; i < catalogo.length; i++) {
        console.log(catalogo[i].emCartaz == true ? catalogo[i] : "")
    }
}

module.exports = listarFilmesEmCartaz