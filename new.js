/* //classes
function User (nome, email) {
    this.nome = nome;
    this.email = email;

    this.exibirInfos = function () {
        return `${this.nome}, ${this.email}`;
    }
} */

// USANDO O CONSTRUTOR:
/* const novoUser = new User('Juliana', 'j@j.com');
console.log (novoUser.exibirInfos()); */


/* // USANDO O CREATE:
function Admin (role) {
    User.call(this, 'Juliana', 'j2j.com');
    this.role = role || 'estudante';
}

Admin.prototype = Object.create(User.prototype);
const novoUser = new Admin ('Admin');


console.log(novoUser.exibirInfos());
console.log(novoUser.role); */


// User em formato de objeto:
const user = {
    init: function(nome, email) {
        this.nome = nome;
        this.email = email;
    },

    exibirInfos: function() {
        return this.nome;
    }
}

const novoUser = Object.create(user);
novoUser.init('Juliana', 'j@j.com');

console.log(novoUser.exibirInfos());
//console.log(user.isPrototypeOf(novoUser)); 