import { BaseError } from "./baseErrors";

export class ValueInvalid extends BaseError{
    constructor(){
        super(400, 'O valor inicial precisa ser 1.')
    }
}

export class ProductNotFound extends BaseError{
    constructor(){
        super(404, 'Produto não encontrado.')
    }
}

export class NumberFormat extends BaseError{
    constructor(){
        super(400, 'Formato inválido... Será aceito somente numeros')
    }
}

