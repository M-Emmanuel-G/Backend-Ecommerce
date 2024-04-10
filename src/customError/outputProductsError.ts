import { BaseError } from "./baseErrors";

export class OutputNotFound extends BaseError{
    constructor(){
        super(400, 'Nota de saída não encontrada!')
    }
}

export class QtdFormat extends BaseError{
    constructor(){
        super(400, 'Quantidade precisa ser numero!')
    }
}