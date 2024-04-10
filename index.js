const datefns = require("date-fns")
const dataAtual = new Date()
const dataFormatada = datefns.format(dataAtual, "dd/MM/yyyy HH:mm:ss")

console.log(dataFormatada)