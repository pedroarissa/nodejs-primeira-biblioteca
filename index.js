import chalk from 'chalk';
import fs from "fs";



function extraiLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^\)]*)\)/gm;

    const arrayResultados = [];
    let temp;
    while((temp = regex.exec(texto)) !== null) {
        arrayResultados.push({[temp[1]]: temp[2]})
    }

    return arrayResultados.length === 0 ? "Não há links" : arrayResultados;
}

function trataErro(erro) {
    throw new Error(chalk.red(erro));
}

async function pegaArquivo(caminhoDoArquivo) {
    const encoding = "utf-8";
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        return extraiLinks(texto);
    } catch(erro) {
        trataErro(erro)
    } finally {
        console.log(chalk.yellow("Operação concluída!"))
    }
}

export {pegaArquivo};
export {trataErro};