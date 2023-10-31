import { BaseError } from "./baseErrors";

export class BodyNotInserted extends BaseError{
    constructor(){
        super(422, 'Todas as informacoes precisam ser inseridas.')
    }
}

export class PasswordLength extends BaseError{
    constructor(){
        super(400, 'A senha precisa conter 6 digitos.')
    }
}

export class CPFLength extends BaseError{
    constructor(){
        super(400, 'CPF precisa conter 11 digitos.')
    }
}

export class ClientNotFound extends BaseError{
    constructor(){
        super(404, 'Cliente não encontrado.')
    }
}

export class PasswordWrong extends BaseError{
    constructor(){
        super(422, 'Senha inválida..')
    }
}

export class InsertEmail extends BaseError{
    constructor(){
        super(422, 'Email não informado.')
    }
}

export class NameLength extends BaseError{
    constructor(){
        super(422, 'Nome precisa conter no minimo 10 caracteres.')
    }
}

export class EmailFormat extends BaseError{
    constructor(){
        super(400, 'Formato de email inválido.')
    }
}

export class CPFExists extends BaseError{
    constructor(){
        super(400, 'Este CPF já está sendo utilizado por outro cliente.')
    }
}

export class EmailExists extends BaseError{
    constructor(){
        super(400, 'Este email já está sendo utilizado por outro cliente.')
    }
}

export class PhoneExists extends BaseError{
    constructor(){
        super(400, 'Este telefone já está sendo utilizado por outro cliente.')
    }
}

export class EmailAlreadyRegistered extends BaseError{
    constructor(){
        super(400, 'Este CPF ja está sendo utilizado por outro cliente.')
    }
}

export class EnterNewPassword extends BaseError{
    constructor(){
        super(400, 'Insira uma nova senha.')
    }
}

export class SamePassword extends BaseError{
    constructor(){
        super(400, 'A nova senha não pode ser igual uma senha antiga.')
    }
}