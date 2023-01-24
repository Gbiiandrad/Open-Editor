// Primeira classe e exportar oi codigo dessa clase
// Não esquecer de criar o pack JSON ---- * npm init -y * E colocar o *"type": "module",* no arquivo.

export default class User {
    //private
    #nome
    #email
    #nascimento
    #role
    #ativo

    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome; // # para private
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante'; // Ou ele vai iniciar como estudante
        this.#ativo = ativo;
    }

    get nome() {
        return this.#nome;
    }

    get email() {
        return this.#email;
    }

    get nascimento() {
        return this.#nascimento;
    }

    get role() {
        return this.#role;
    }

    get ativo() {
        return this.#ativo;
    }

    set nome(novoNome) {
        if(novoNome == '') {
            throw new Error('Formato não VÁLIDO'); // dar erro
        }
        
        this.#nome = novoNome;
    }


   /*  //metodo privado
    #montaObjUser() {
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo
        })
    } */

    //metodos
    exibirInfos() {
        //para mandar as informação para fora da classe provada
        return `${this.nome} - ${this.email} - ${this.nascimento} - ${this.role} - ${this.ativo}`;
    }
}
