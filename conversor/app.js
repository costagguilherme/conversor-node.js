const Reader = require("./classes/Reader")
const Processor = require("./classes/Processor")
const Table = require("./classes/Table")
const HtmlParse = require("./classes/HtmlParse")
const Writer = require("./classes/Writer")
const PDFGenerator = require("./classes/PDFGenerator")

let reader = new Reader()
let escritor = new Writer()

async function main () {
    let dados = await reader.Read("./users.csv") // Ler dados
    let dadosProcessados = Processor.Process(dados) // Gerar array
    let usuarios = new Table(dadosProcessados) // Gera tabela
    let html = await HtmlParse.Parse(usuarios) // Passando pra html
    escritor.Write(Date.now() + ".html", html)
    PDFGenerator.writePDF(Date.now() + ".PDF", html)
}

main()

