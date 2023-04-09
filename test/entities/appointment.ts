export interface AppointmentProps {
    id: number;
    nome: string;
    cpf: string;
    email: string;
    telefone: string;
    senha: string;
    confirmarSenha: string;
    endereco: string;
    complemento: string;
    pontoRef: string;
}

export class Appointment {
    private props: AppointmentProps;

    get usuario() {
        return this.props;
    }

    get id() {
        return this.props.id;
    }

    get cpf() {
        return this.props.cpf;
    }

    get nome() {
        return this.props.nome;
    }

    get email() {
        return this.props.email;
    }

    get telefone() {
        return this.props.telefone;
    }   

    get senha() {
        return this.props.senha;
    }

    get confirmarSenha() {
        return this.props.confirmarSenha;
    }

    get endereco() {
        return this.props.endereco;
    }

    get complemento() {
        return this.props.complemento;
    }

    get pontoRef() {    
        return this.props.pontoRef;
    }

    constructor(props: AppointmentProps) {
        const { nome, email, telefone, senha, endereco, complemento, pontoRef, confirmarSenha, cpf } = props;

        if (!nome || !email || !telefone || !senha || !endereco || !complemento) {
            throw new Error('Os campos não pode ser vazio');
        } else if (senha !== confirmarSenha) {
            throw new Error('As senhas não são iguais');
        } 

        this.props = props;
    }
}