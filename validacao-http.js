import fetch from "node-fetch";

function manejaErros(erro) {
    throw new Error(erro.message);
}

async function checaStatus(arrayURLs) {
    try {
        const arrayStatus = await Promise.all(arrayURLs.map( async url => {
            const res = await fetch(url);
            return res.status;
        }))
        return arrayStatus;
    } catch {
        manejaErros(erro);
    }
    
}


function geraArrayURLs(arrayLinks) {
    return arrayLinks.map(linkObjeto => Object.values(linkObjeto).join());
 
}


async function validaURLs(arrayLinks) {
    const links = geraArrayURLs(arrayLinks);
    const statusLinks = await checaStatus(links);
    
    const resultados = arrayLinks.map((objeto, indice) => ({
         ...objeto, status:statusLinks[indice]}));
    return resultados
    
}

export {geraArrayURLs};
export {validaURLs};