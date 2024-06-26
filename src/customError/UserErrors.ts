import { BaseError } from "./baseErrors";

export class UserNotFound extends BaseError{
    constructor(){
        super(400, "Usuario nâo encontrado!")
    }
}
export class RoleUserNotFound extends BaseError{
    constructor(){
        super(400, "Conta admin não encontrada!")
    }
}

export class RoleUserNotAdmin extends BaseError{
    constructor(){
        super(400, "Tipo de usuario não permitido! Você precisa de uma permissâo admin!")
    }
}

export class RoleUserInvalid extends BaseError{
    constructor(){
        super(400, "Tipo de usuario inválido!")
    }
}

export class EmailNotInserted extends BaseError{
    constructor(){
        super(400, "Email não foi inserido!")
    }
}

export class PasswordNotInserted extends BaseError{
    constructor(){
        super(400, "Senha não foi inserido!")
    }
}

export class PasswordWrong extends BaseError{
    constructor(){
        super(400, "Senha inválida!")
    }
}

