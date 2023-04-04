const Pessoa={
    nome:'Bruno',
    curso:'Javascript',
    aulas:{
        aula1: 'introdução',
        aula2: 'variaveis',
        aula3: 'condicionais'
    }
}

console.log(Pessoa.aulas.aula2)

const string_pessoa='{"nome":"Bruno","curso":"Javascript","aulas":{"aula1":"introdução","aula2":"variaveis","aula3":"condicionais"}}'

const s_json=JSON.stringify(Pessoa)//converter o obj literal em string json

const o_json=JSON.parse(string_pessoa) //converter de json para obj literal

console.log(s_json)

console.log(o_json)