const titulo = document.querySelector('.titulo');
const conselho = document.querySelector('.conselho');
const botaoPesquisar = document.querySelector('.pesquisar');


async function consultarApi(){
    const apiUrl = 'https://api.adviceslip.com/advice';
    const resposta = await fetch(apiUrl);
    return resposta.json();
};
async function getConselho(){
    const conselho = await consultarApi();
    return conselho.slip.advice;
}
async function getIdConselho(){
    const conselho = await consultarApi();
    return conselho.slip.id;
}

async function mostrarConselho(){
    consultaIdConselho = await getIdConselho();
    consultaConselho = await getConselho();
    titulo.innerHTML = `ADVICE #${consultaIdConselho}`;
    conselho.innerHTML = consultaConselho;
}

botaoPesquisar.addEventListener('click',() => mostrarConselho());



// console.log(getConselho().then(retorno => retorno.slip.advice))

// carregarDados();
// console.log(getConselho());
// carregarConselho()
// const teste =  carregarConselho(url1);
// console.log(teste)

// console.log(carregarConselho(url1));


// carregarConselho(url1).then(retorno => console.log(`id: ${retorno.slip.id}`));
// carregarConselho(url1).then(retorno => console.log(`conselho do dia: ${retorno.slip.advice}`));