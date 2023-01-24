import User from "./User.js";  // SEMPRE colocar o js no final *"./User.js";*

export default class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) { 
        super(nome, email, nascimento, role, ativo); // O SUPER é para aproveitar todas a propriedades da class User.
    }

    // Aprovação do estudante
    aprovaEstudante(estudante, cursos) {
        return `Estudante ${estudante} passou no curso de ${cursos}.`
    }
}
