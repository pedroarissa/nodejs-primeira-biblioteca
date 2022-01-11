import chalk from 'chalk';
import {pegaArquivo} from "./index.js";
import { trataErro } from './index.js';
import { validaURLs } from './validacao-http.js';



const caminho = process.argv;

async function processaTexto(caminhoDeArquivo) {
        const resultado = await pegaArquivo(caminhoDeArquivo[2]);
        if (caminho[3] === "validar") {
                console.log(chalk.yellow("Links Validados"), await validaURLs(resultado));
        } else {
                console.log(chalk.yellow("Lista de Links"), resultado);
        }
        
    
}

processaTexto(caminho);