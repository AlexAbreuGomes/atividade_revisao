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
    // Método para mostrar os dados privados estudar sobre 
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
    mostrarDadosFuncionarios() {
        console.log(`Nome: ${this.nome}`);
        console.log(`ID de membro: ${this.id_membro}`);
        console.log(`Endereço: ${this.endereco}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`Telefone: ${this.telefone}`);
        console.log(`Formação: ${this.formacao}`);
    }
}
class Lider {
    lider;
    constructor(lider) {
        this.lider = lider;
    }
    // Método para mostrar os dados privados estudar sobre 
    getLider() {
        return this.lider;
    }
    setLider(lider) {
        this.lider = lider;
    }
    mostrarDadosLider() {
        console.log("Dados do Líder:");
        console.log(`Nome: ${this.lider.nome}`);
        console.log(`ID Membro: ${this.lider.getId_membro()}`);
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
    // Método para mostrar os dados privados estudar sobre 
    getLider() {
        return this.lider;
    }
    setLider(lider) {
        this.lider = lider;
    }
    mostrarDadosEquipe() {
        console.log(`Lider: ${funcionario1.nome}`);
        console.log(`ID projeto: ${this.id_projeto}`);
        console.log(`Membros: ${funcionario2}`);
    }
}
class Projetos {
    projeto_andamento;
    nome_projeto;
    data_inicial;
    data_limite;
    equipe_projeto;
    constructor(projeto_andamento, nome_projeto, data_inicial, data_limite, equipe_projeto) {
        this.projeto_andamento = projeto_andamento;
        this.nome_projeto = nome_projeto;
        this.data_inicial = data_inicial;
        this.data_limite = data_limite;
        this.equipe_projeto = equipe_projeto;
    }
    getProjeto_andamento() {
        return this.projeto_andamento;
    }
    getNome_projeto() {
        return this.nome_projeto;
    }
    getData_inicial() {
        return this.data_inicial;
    }
    getData_limite() {
        return this.data_limite;
    }
    getEquipe_projeto() {
        return this.equipe_projeto;
    }
    setProjeto_andamento(projeto_andamento) {
        this.projeto_andamento = projeto_andamento;
    }
    setNome_projeto(nome_projeto) {
        this.nome_projeto = nome_projeto;
    }
    setData_inicial(data_inicial) {
        this.data_inicial = data_inicial;
    }
    setData_limite(data_limite) {
        this.data_limite = data_limite;
    }
    setEquipe_projeto(equipe_projeto) {
        this.equipe_projeto = equipe_projeto;
    }
    mostrarDadosprojeto() {
        console.log(`Projeto em andamneto: ${this.getProjeto_andamento()}`);
        console.log(`Nome projeto: ${this.getNome_projeto()}`);
        console.log(`Data inicial: ${this.getData_inicial()}`);
        console.log(`Data limite: ${this.getData_limite()}`);
        console.log(`Equipe responsável: ${this.getEquipe_projeto().membros}`);
    }
}
class Tarefa extends Projetos {
    descricao;
    responsavel;
    prazo;
    constructor(projeto_andamento, nome_projeto, data_inicial, data_limite, equipe_projeto, descricao, responsavel, prazo) {
        super(projeto_andamento, nome_projeto, data_inicial, data_limite, equipe_projeto);
        this.descricao = descricao,
            this.responsavel = responsavel,
            this.prazo = prazo;
    }
    getDescricao() {
        return this.descricao;
    }
    getResponsavel() {
        return this.responsavel;
    }
    getPrazo() {
        return this.prazo;
    }
    setDescricao(descricao) {
        this.descricao = descricao;
    }
    setResponsavel(responsavel) {
        this.responsavel = responsavel;
    }
    setPrazo(prazo) {
        this.prazo = prazo;
    }
    mostrarDadosTarefas() {
        /*super.mostrarDadosprojeto();
        console.log(`Descrição: ${this.getDescricao()}`);
        console.log(`Lider Responsavel: ${this.getResponsavel().getLider().getLider().nome}`);
        console.log(`Prazo de entrega: ${this.getPrazo()}`);*/
        super.mostrarDadosprojeto(); // Chamando o método mostrarDadosprojeto da classe pai
        console.log(`Descrição: ${this.getDescricao()}`);
        console.log(`Lider Responsavel: ${this.getResponsavel().getLider()}`);
        console.log(`Prazo de entrega: ${this.getPrazo()}`);
    }
}
class Gerente extends Funcionario {
    departamento;
    constructor(nome, id_membro, endereco, email, telefone, formacao, departamento) {
        super(nome, id_membro, endereco, email, telefone, formacao);
        this.departamento = departamento;
    }
    mostrarDadosGerente() {
        super.mostrarDadosFuncionarios();
        console.log(`Departamento: ${this.departamento}`);
    }
}
class Desenvolvedor extends Funcionario {
    linguagem;
    constructor(nome, id_membro, endereco, email, telefone, formacao, linguagem) {
        super(nome, id_membro, endereco, email, telefone, formacao);
        this.linguagem = linguagem;
    }
    mostrarDadosDev() {
        super.mostrarDadosFuncionarios();
        console.log(`Linguagem: ${this.linguagem}`);
    }
}
class Designer extends Funcionario {
    ferramenta;
    constructor(nome, id_membro, endereco, email, telefone, formacao, ferramenta) {
        super(nome, id_membro, endereco, email, telefone, formacao);
        this.ferramenta = ferramenta;
    }
    mostrarDadosDesigner() {
        super.mostrarDadosFuncionarios();
        console.log(`Ferramenta: ${this.ferramenta}`);
    }
}
// Instâncias de Funcionario
const funcionario1 = new Funcionario('João Silva', '001', 'Rua A, 123', 'joao@example.com', '123456789', 'Graduação');
const funcionario2 = new Funcionario('Maria Santos', '002', 'Rua B, 456', 'maria@example.com', '987654321', 'Pós-graduação');
funcionario1.mostrarDadosFuncionarios();
console.log('---------------------------');
funcionario2.mostrarDadosFuncionarios();
console.log(funcionario1.getEmail());
// Instâncias de Lider
const lider1 = new Lider(funcionario1);
const lider2 = new Lider(funcionario2);
lider1.mostrarDadosLider();
lider2.mostrarDadosLider();
// Instâncias de Equipe
const equipe1 = new Equipe(lider1, 'projeto001', [funcionario1]);
const equipe2 = new Equipe(lider2, 'projeto002', [funcionario2]);
equipe1.mostrarDadosEquipe();
equipe2.mostrarDadosEquipe();
// Instâncias de Projetos
const projeto1 = new Projetos(0, 'Projeto A', new Date('2024-01-01'), new Date('2024-12-31'), equipe1);
const projeto2 = new Projetos(0, 'Projeto B', new Date('2024-02-01'), new Date('2024-12-31'), equipe2);
projeto1.mostrarDadosprojeto();
projeto2.mostrarDadosprojeto();
// Instâncias de Tarefa
const tarefa1 = new Tarefa(0, 'Projeto A', new Date('2024-01-01'), new Date('2024-12-31'), equipe1, 'Descrição da tarefa 1', equipe1, new Date('2024-12-31'));
const tarefa2 = new Tarefa(0, 'Projeto B', new Date('2024-02-01'), new Date('2024-12-31'), equipe2, 'Descrição da tarefa 2', equipe2, new Date('2024-11-20'));
tarefa1.mostrarDadosTarefas();
tarefa2.mostrarDadosTarefas();
