"use strict";
class Funcionario {
    nome;
    id_membro;
    endereco;
    email;
    telefone;
    formacao;
    constructor(nome, id_membro, endereco, email, telefone, formacao) {
        this.nome = nome;
        this.id_membro = id_membro;
        this.endereco = endereco;
        this.email = email;
        this.telefone = telefone;
        this.formacao = formacao;
    }
    getId_membro() {
        return this.id_membro;
    }
    getEndereco() {
        return this.endereco;
    }
    getEmail() {
        return this.email;
    }
    getTelefone() {
        return this.telefone;
    }
    setId_membro(id_membro) {
        this.id_membro = id_membro;
    }
    setEndereco(endereco) {
        this.endereco = endereco;
    }
    setEmail(email) {
        this.email = email;
    }
    setTelefone(telefone) {
        this.telefone = telefone;
    }
    // Método para mostrar os dados privados estudar sobre 
    mostrarDadosPrivados() {
        console.log(`ID de membro: ${this.id_membro}`);
        console.log(`Endereço: ${this.endereco}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`Telefone: ${this.telefone}`);
    }
}
class Lider {
    lider;
    constructor(lider) {
        this.lider = lider;
    }
}
class Equipe {
    lider;
    id_projeto;
    membros;
    constructor(lider, id_projeto, membros) {
        this.lider = lider;
        this.id_projeto = id_projeto;
        this.membros = membros;
    }
}
class Projetos {
    projeto_Andamento;
    nome_projeto;
    data_inicial;
    data_limite;
    equipe_projeto;
    constructor(projeto_Andamento, nome_projeto, data_inicial, data_limite, equipe_projeto) {
        this.projeto_Andamento = projeto_Andamento;
        this.nome_projeto = nome_projeto;
        this.data_inicial = data_inicial;
        this.data_limite = data_limite;
        this.equipe_projeto = equipe_projeto;
    }
}
class Tarefa extends Projetos {
    descricao;
    responsavel;
    prazo;
    constructor(projeto_Andamento, nome_projeto, data_inicial, data_limite, equipe_projeto, descricao, responsavel, prazo) {
        super(projeto_Andamento, nome_projeto, data_inicial, data_limite, equipe_projeto);
        this.descricao = descricao,
            this.responsavel = responsavel,
            this.prazo = prazo;
    }
}
class Gerente extends Funcionario {
    departamento;
    constructor(nome, id_membro, endereco, email, telefone, formacao, departamento) {
        super(nome, id_membro, endereco, email, telefone, formacao);
        this.departamento = departamento;
    }
}
class Desenvolvedor extends Funcionario {
    linguagem;
    constructor(nome, id_membro, endereco, email, telefone, formacao, linguagem) {
        super(nome, id_membro, endereco, email, telefone, formacao);
        this.linguagem = linguagem;
    }
}
class Designer extends Funcionario {
    ferramenta;
    constructor(nome, id_membro, endereco, email, telefone, formacao, ferramenta) {
        super(nome, id_membro, endereco, email, telefone, formacao);
        this.ferramenta = ferramenta;
    }
}
// Instâncias de Funcionario
const funcionario1 = new Funcionario('João Silva', '001', 'Rua A, 123', 'joao@example.com', '123456789', 'Graduação');
const funcionario2 = new Funcionario('Maria Santos', '002', 'Rua B, 456', 'maria@example.com', '987654321', 'Pós-graduação');
// Instâncias de Lider
const lider1 = new Lider(funcionario1);
const lider2 = new Lider(funcionario2);
// Instâncias de Equipe
const equipe1 = new Equipe(lider1, 'projeto001', funcionario1);
const equipe2 = new Equipe(lider2, 'projeto002', funcionario2);
// Instâncias de Projetos
const projeto1 = new Projetos(0, 'Projeto A', new Date('2024-01-01'), new Date('2024-12-31'), equipe1);
const projeto2 = new Projetos(0, 'Projeto B', new Date('2024-02-01'), new Date('2024-12-31'), equipe2);
// Instâncias de Tarefa
const tarefa1 = new Tarefa(0, 'Projeto A', new Date('2024-01-01'), new Date('2024-12-31'), equipe1, 'Descrição da tarefa 1', equipe1, new Date('2024-12-31'));
const tarefa2 = new Tarefa(0, 'Projeto B', new Date('2024-02-01'), new Date('2024-12-31'), equipe2, 'Descrição da tarefa 2', equipe2, new Date('2024-11-20'));
