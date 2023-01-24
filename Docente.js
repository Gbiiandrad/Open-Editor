import User from "./User.js";  // SEMPRE colocar o js no final *"./User.js";*

class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) { 
        super(nome, email, nascimento, role, ativo); // O SUPER é para aproveitar todas a propriedades da class User.
    }

    // Aprovação do estudante
    aprovaEstudante(estudante, cursos) {
        return `Estudante ${estudante} passou no curso de ${cursos}.`
    }
}

const novoDocente = new Docente ('Mariana', 'm@m.com', '2023-01-16');

console.log(novoDocente);
console.log(novoDocente.exibirInfos());
console.log(novoDocente.aprovaEstudante('Juliana', 'JS'));