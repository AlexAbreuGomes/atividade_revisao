
class Funcionario {
    public nome: string;
    private id_membro: string;
    private endereco: string;
    private email: string;
    private telefone: string;
    public formacao: string;

    constructor(
        nome: string,
        id_membro: string,
        endereco: string,
        email: string,
        telefone: string,
        formacao: string) {

        this.nome = nome;
        this.id_membro = id_membro;
        this.endereco = endereco;
        this.email = email;
        this.telefone = telefone;
        this.formacao = formacao;
    }

    getId_membro(): string {
        return this.id_membro;
    }

    getEndereco(): string {
        return this.endereco;
    }

    getEmail(): string {
        return this.email;
    }

    getTelefone(): string {
        return this.telefone;
    }

    setId_membro(id_membro: string): void {
        this.id_membro = id_membro;
    }

    setEndereco(endereco: string): void {
        this.endereco = endereco;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    setTelefone(telefone: string): void {
        this.telefone = telefone;
    }

}

class Lider {
    protected lider: Funcionario;

    constructor(
        lider: Funcionario) {

        this.lider = lider
    }
}

class Equipe {
    protected lider: Lider;
    public id_projeto: string;
    public membros: Funcionario;

    constructor(
        lider: Lider,
        id_projeto: string,
        membros: Funcionario) {

        this.lider = lider;
        this.id_projeto = id_projeto;
        this.membros = membros;
    }
}

class Projetos {
    protected projeto_Andamento: number;
    protected nome_projeto: string;
    public data_inicial: Date;
    public data_limite: Date;
    protected equipe_projeto: Equipe;

    constructor(
        projeto_Andamento: number,
        nome_projeto: string,
        data_inicial: Date,
        data_limite: Date,
        equipe_projeto: Equipe) {

        this.projeto_Andamento = projeto_Andamento;
        this.nome_projeto = nome_projeto;
        this.data_inicial = data_inicial;
        this.data_limite = data_limite;
        this.equipe_projeto = equipe_projeto;
    }
}

class Tarefa extends Projetos {
    public descricao: string;
    public responsavel: Equipe;
    public prazo: Date;

    constructor(
        projeto_Andamento: number,
        nome_projeto: string,
        data_inicial: Date,
        data_limite: Date,
        equipe_projeto: Equipe,
        descricao: string,
        responsavel: Equipe,
        prazo: Date) {
        super(projeto_Andamento, nome_projeto, data_inicial, data_limite, equipe_projeto);
        this.descricao = descricao,
            this.responsavel = responsavel,
            this.prazo = prazo
    }
}

