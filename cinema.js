const catalogo = require("./database/catalogo.json");
const adicionarFilme = require("./funcoes/adicionarFilme");
const buscarFilme = require("./funcoes/buscarFilme");
const alterarStatusEmCartaz = require("./funcoes/alterarStatusEmCartaz");
const listarTodosOsFilmes = require("./funcoes/listarTodosOsFilmes");
const listarFilmesEmCartaz = require("./funcoes/listarFilmesEmCartaz");
const listarFilmesDeLongaDuracao = require("./funcoes/listarFilmesDeLongaDuracao");

adicionarFilme(catalogo,
  { codigo: 4,
    titulo: "Doutor Estranho 2",
    duracao: 126,
    atores: "Benedict Cumberbatch e Elizabeth Olsen",
    anoDeLancamento: "4 de maio de 2022",
    emCartaz: true })

adicionarFilme(catalogo,
  { codigo: 5,
    titulo: "O Silêncio dos Inocentes",
    duracao: 118,
    atores: "Jodie Foster e Anthony Hopkins",
    anoDeLancamento: "17 de maio de 1991",
    emCartaz: false })

console.log(buscarFilme(catalogo, 3))
alterarStatusEmCartaz(catalogo, 2)
listarTodosOsFilmes(catalogo)
listarFilmesEmCartaz(catalogo)
listarFilmesDeLongaDuracao(catalogo)
