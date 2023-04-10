export interface LoginAdminProps {
  email: string;
  senha: string;
}

export class LoginAdmin {
    private props: LoginAdminProps;

    get loginAdmin() {
      return this.props;
    }
    get email() {
        return this.props.email;
    }

    get senha() {
        return this.props.senha;
    }

    constructor(props: LoginAdminProps) {
      const {email, senha} = props;

      if (!email || !senha ) {
          throw new Error('Os campos não pode ser vazio');
      }else if (email !== "admin@gmail.com") {
        throw new Error('email ou senha incorreta');
      }
       else if (senha !== "admin123") {
          throw new Error('email ou senha incorreta');
      } 

      this.props = props;
  }
}