import { BaseError } from "./baseErrors";

export class QuantityNotFound extends BaseError{
    constructor(){
        super(422, 'Quantidade não informada.')
    }
}

export class QuantityFormat extends BaseError{
    constructor(){
        super(400, 'Quantidade deve ser entre 1 e 5.')
    }
}