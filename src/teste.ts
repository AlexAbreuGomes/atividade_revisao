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
    mostrarDadosFuncionarios(): void {
        console.log(`Nome: ${this.nome}`);
        console.log(`ID de membro: ${this.id_membro}`);
        console.log(`Endereço: ${this.endereco}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`Telefone: ${this.telefone}`);
        console.log(`Formação: ${this.formacao}`);
    }
}

class Lider {
    protected lider: Funcionario;

    constructor(
        lider: Funcionario) {
        this.lider = lider;
    }

    getLider():Funcionario{
        return this.lider;
    }

    setLider(lider:Funcionario): void {
        this.lider = lider;
    }

    mostrarDadosLider(): void {
        console.log(`Nome: ${funcionario2.nome}`);
        console.log(`ID Membro: ${funcionario2.getId_membro()}`)
        console.log(`Nome: ${funcionario1.nome}`);
        console.log(`ID Membro: ${funcionario1.getId_membro()}`)
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

    getLider():Lider{
        return this.lider;
    }

    setLider(lider:Lider): void {
        this.lider = lider;
    }

    mostrarDadosEquipe(): void {
        console.log(`Lider: ${funcionario1.nome}`);
        console.log(`ID projeto: ${projeto1}`)
        console.log(`Membros: ${funcionario1}`)
    }   
    
}
 
class Projetos {
    protected projeto_andamento: number;
    protected nome_projeto: string;
    protected data_inicial: Date;
    protected data_limite: Date;
    protected equipe_projeto: Equipe;

    constructor(
        projeto_andamento: number,
        nome_projeto: string,
        data_inicial: Date,
        data_limite: Date,
        equipe_projeto: Equipe) {

        this.projeto_andamento = projeto_andamento;
        this.nome_projeto = nome_projeto;
        this.data_inicial = data_inicial;
        this.data_limite = data_limite;
        this.equipe_projeto = equipe_projeto;
    }

    getProjeto_andamento(): number {
        return this.projeto_andamento;
    }

    getNome_projeto(): string {
        return this.nome_projeto;
    }

    getData_inicial(): Date {
        return this.data_inicial;
    }

    getData_limite(): Date {
        return this.data_limite;
    }

    getEquipe_projeto(): Equipe {
        return this.equipe_projeto;
    }

    setProjeto_andamento(projeto_andamento: number): void {
        this.projeto_andamento = projeto_andamento;
    }

    setNome_projeto(nome_projeto: string): void {
        this.nome_projeto = nome_projeto;
    }

    setData_inicial(data_inicial: Date): void {
        this.data_inicial = data_inicial;
    }

    setData_limite(data_limite: Date): void {
        this.data_limite = data_limite;
    }

    setEquipe_projeto(equipe_projeto: Equipe): void {
        this.equipe_projeto = equipe_projeto;
    }
    
}

class Tarefa extends Projetos {
    protected descricao: string;
    protected responsavel: Equipe;
    protected prazo: Date;

    constructor(
        projeto_andamento: number,
        nome_projeto: string,
        data_inicial: Date,
        data_limite: Date,
        equipe_projeto: Equipe,
        descricao: string,
        responsavel: Equipe,
        prazo: Date) {
        super(projeto_andamento, nome_projeto, data_inicial, data_limite, equipe_projeto);
        this.descricao = descricao,
            this.responsavel = responsavel,
            this.prazo = prazo
    }
    getDescricao(): string {
        return this.descricao;
    }

    getResponsavel(): Equipe {
        return this.responsavel;
    }

    getPrazo(): Date {
        return this.prazo;
    }

    setDescricao(descricao: string): void {
        this.descricao = descricao;
    }

    setResponsavel(responsavel: Equipe): void {
        this.responsavel = responsavel;
    }

    setPrazo(prazo: Date): void {
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
funcionario1.mostrarDadosFuncionarios()
console.log('---------------------------')
funcionario2.mostrarDadosFuncionarios()
console.log(funcionario1.getEmail())

// Instâncias de Lider
const lider1 = new Lider(funcionario1);
const lider2 = new Lider(funcionario2);
lider1.mostrarDadosLider()
lider2.mostrarDadosLider()

// Instâncias de Equipe
const equipe1 = new Equipe(lider1, 'projeto001', funcionario1);
const equipe2 = new Equipe(lider2, 'projeto002', funcionario2);
equipe1.mostrarDadosEquipe();
equipe2.mostrarDadosEquipe();

// Instâncias de Projetos
const projeto1 = new Projetos(0, 'Projeto A', new Date('2024-01-01'), new Date('2024-12-31'), equipe1);
const projeto2 = new Projetos(0, 'Projeto B', new Date('2024-02-01'), new Date('2024-12-31'), equipe2);


// Instâncias de Tarefa
const tarefa1 = new Tarefa(0, 'Projeto A', new Date('2024-01-01'), new Date('2024-12-31'), equipe1, 'Descrição da tarefa 1', equipe1, new Date('2024-12-31'));
const tarefa2 = new Tarefa(0, 'Projeto B', new Date('2024-02-01'), new Date('2024-12-31'), equipe2, 'Descrição da tarefa 2', equipe2, new Date ('2024-11-20'));



