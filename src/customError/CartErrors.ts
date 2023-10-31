import { BaseError } from "./baseErrors";

export class QuantityInvalid extends BaseError{
    constructor(){
        super(400, 'O valor inicial precisa ser 1.')
    }
}

export class ValueNotFound extends BaseError{
    constructor(){
        super(422, 'O valor não informado.')
    }
}