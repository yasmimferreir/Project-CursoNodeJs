//manipular o sistema de arquivos
const fs = require("fs");
const path = require("path");

//criar um pasta
fs.mkdir(path.join(__dirname, "/teste2"), (error) => {
  if (error) {
    return console.log("Erro:", error);
  }

  console.log("Pasta criada com sucesso!");
});

//criar um arquivo
fs.writeFile(
  path.join(__dirname, "/teste2", "teste2.js"),
  "hello node!",
  (error) => {
    if (error) {
      return console.log("Error: ", error);
    }

    console.log("Arquivo criado!");
  }
);

//Adicionar detalhes dentro do arquivo
fs.appendFile(path.join(__dirname, "/teste2", "teste2.js"), "Olá!", (error) => {
  if (error) {
    return console.log("Error: ", error);
  }

  console.log("Detalhes do arquivo criado!");
});

//Ler arquivos
fs.readFile(
  path.join(__dirname, "/teste2", "teste2.js"),
  "utf-8",
  (error, data) => {
    if (error) {
      return console.log("Error:", error);
    }

    console.log(data);
  }
);
