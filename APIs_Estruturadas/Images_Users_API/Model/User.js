class User {
    constructor ( id, nome, data_criacao ) {
        this.id = id;
        this.nome = nome;
        this.data_criacao = data_criacao;
    }

    constructor ( nome, data_criacao ) {
        this.nome = nome;
        this.data_criacao = data_criacao;
    }
}

module.exports = { User };