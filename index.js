// passar todas as extancias e chamadas de classes

//importação das classes
import User from "./User.js";
import Docente from "./docente.js";
import Admin from "./Admin.js";

const novoUser = new User('Mariana', 'm@m.com', '2023-01-24');
console.log(novoUser.exibirInfos());

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2023-01-01');
console.log(novoAdmin.nome);
novoAdmin.nome = 'André';
console.log(novoAdmin.nome);
