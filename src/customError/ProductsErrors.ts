import { BaseError } from "./baseErrors";

export class ValueInvalid extends BaseError{
    constructor(){
        super(422, 'O valor Invalido!')
    }
}

export class ProductNotFound extends BaseError{
    constructor(){
        super(422, 'Produto não encontrado!')
    }
}

export class NumberFormat extends BaseError{
    constructor(){
        super(422, 'Valor do produto inválido!')
    }
}