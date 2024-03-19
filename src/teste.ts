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

    // Método para mostrar os dados privados estudar sobre 
    mostrarDadosPrivados(): void {
        console.log(`ID de membro: ${this.id_membro}`);
        console.log(`Endereço: ${this.endereco}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`Telefone: ${this.telefone}`);
    }
}

class Lider {
    public lider: Funcionario;

    constructor(
        lider: Funcionario) {

        this.lider = lider
    }
}

class Equipe {
    public lider: Lider;
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
    public projeto_Andamento: number;
    public nome_projeto: string;
    public data_inicial: Date;
    public data_limite: Date;
    public equipe_projeto: Equipe;

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

class Gerente extends Funcionario {
    public departamento: string;

    constructor(
        nome: string,
        id_membro: string,
        endereco: string,
        email: string,
        telefone: string,
        formacao: string,
        departamento: string
    ) {
        super(nome, id_membro, endereco, email, telefone, formacao);
        this.departamento = departamento;
    }
}

class Desenvolvedor extends Funcionario {
    public linguagem: string;

    constructor(
        nome: string,
        id_membro: string,
        endereco: string,
        email: string,
        telefone: string,
        formacao: string,
        linguagem: string
    ) {
        super(nome, id_membro, endereco, email, telefone, formacao);
        this.linguagem = linguagem;
    }
}

class Designer extends Funcionario {
    public ferramenta: string;

    constructor(
        nome: string,
        id_membro: string,
        endereco: string,
        email: string,
        telefone: string,
        formacao: string,
        ferramenta: string
    ) {
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
const tarefa2 = new Tarefa(0, 'Projeto B', new Date('2024-02-01'), new Date('2024-12-31'), equipe2, 'Descrição da tarefa 2', equipe2, new Date ('2024-11-20'));

