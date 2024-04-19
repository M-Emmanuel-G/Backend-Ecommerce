import { BaseError } from "./baseErrors";

export class AvailableInvalid extends BaseError{
    constructor(){
        super(400, 'Disponibilidade invalida!')
    }
}

export class ClientNotAuthorized extends BaseError{
    constructor(){
        super(400, 'Cliente não autorizado para venda!')
    }
}