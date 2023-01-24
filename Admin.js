import User from "./User.js";  // SEMPRE colocar o js no final *"./User.js";*

class Admin extends User {
    constructor(nome, email, nascimento, role = 'Admin', ativo = true) { 
        super(nome, email, nascimento, role, ativo); // O SUPER é para aproveitar todas a propriedades da class User.
    }
}

const novoAdmin = new Admin ('Rodrigo', 'r@r.com', '2023-01-01');

console.log(novoAdmin);
console.log(novoAdmin.exibirInfos());