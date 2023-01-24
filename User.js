// Primeira classe
class User {
    constructor(nome, email, nascimento, role, ativo = true) {
        this.nome = nome;
        this.email = email;
        this. nascimento = nascimento;
        this.role = role || 'estudante'; // Ou ele vai iniciar como estudante
        this.ativo = ativo;
    }

    //metodos
    exibirInfos() {
        return `Nome: ${this.nome}. Email: ${this.email}.`;
    }
}

const novoUser = new User('Juliana', 'j@j.com', '2023-01-23');
console.log(novoUser);
console.log(novoUser.exibirInfos());

console.log(User.prototype.isPrototypeOf(novoUser)); // objetivo é dar "true"