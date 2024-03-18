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
// Classe Desenvolvedor herda de Funcionario
class Desenvolvedor extends Funcionario {
    linguagem;
    constructor(nome, id_membro, endereco, email, telefone, formacao, linguagem) {
        super(nome, id_membro, endereco, email, telefone, formacao);
        this.linguagem = linguagem;
    }
}
// Classe Designer herda de Funcionario
class Designer extends Funcionario {
    ferramenta;
    constructor(nome, id_membro, endereco, email, telefone, formacao, ferramenta) {
        super(nome, id_membro, endereco, email, telefone, formacao);
        this.ferramenta = ferramenta;
    }
}
