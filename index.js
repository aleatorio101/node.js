const dateFormat = require("./dateFormat");
const dataAtual = new Date();
const dataFormatada = dateFormat(dataAtual);

console.log(dataFormatada);