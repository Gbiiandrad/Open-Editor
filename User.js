// Primeira classe e exportar oi codigo dessa clase
// Não esquecer de criar o pack JSON ---- * npm init -y * E colocar o *"type": "module",* no arquivo.

export default class User {
    constructor(nome, email, nascimento, role, ativo = true) {
        this.nome = nome;
        this.email = email;
        this. nascimento = nascimento;
        this.role = role || 'estudante'; // Ou ele vai iniciar como estudante
        this.ativo = ativo;
    }

    //metodos
    exibirInfos() {
        return `Nome: ${this.nome} - Email: ${this.email}`;
    }
}
