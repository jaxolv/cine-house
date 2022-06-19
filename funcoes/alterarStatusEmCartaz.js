const buscarFilme = require('./buscarFilme')

function alterarStatusEmCartaz(catalogo, codigo) {
    const inverter = buscarFilme(catalogo, codigo)
    inverter.emCartaz = !inverter.emCartaz
}

module.exports = alterarStatusEmCartaz