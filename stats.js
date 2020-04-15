//Importado modulo 'os' com require()
const os = require('os')

//Importando modulo logger
const log = require('./logger')

//Função para pegar os dados em tempo real no intervalo de preferência.
setInterval(() => {

    //Desestruturando e pegando a memória e o total de memória usado
    const { freemem, totalmem } = os

    //Pegando o total de memória e estilizando
    const total = parseInt(totalmem() / 1024 / 1024)

    //Pegando a mem´ria que estar sendo usada e estilizando
    const mem = parseInt(freemem() / 1024 / 1024)

    //Pegando a porcentagem de memória
    const percents = parseInt((mem / total) * 100)

    //Armazenando os dados do OS
    const stats = {
        free: `${mem} MB`,
        total: `${total} MB`,
        usage: `${percents}%`
    }

    //Mostrando os daos em formato de tabela, e logo após limpando.
    console.clear()
    console.log(" ====== pc stats =====")
    console.table(stats)

    log(`${JSON.stringify(stats)}\n`)

}, 1000)