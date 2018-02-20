class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    toString() {
        return `Pessoa: ${this.nome}`
    }
}

const pessoa = new Pessoa('Renato Martins')
console.log(pessoa.toString())
