const user = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2023/01/01",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email);
    }
}

const admin = {
    nome: "Mariana",
    email: "m@m.com",
    role: 'admin',
    criarCurso() {
        console.log('Curso criado com SUCESSO!');
    }
}

Object.setPrototypeOf(admin, user); //definir um prototico

admin.criarCurso();
admin.exibirInfos();