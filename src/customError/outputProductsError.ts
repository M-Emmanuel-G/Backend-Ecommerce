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

export class QtdStock extends BaseError{
    constructor(){
        super(400, 'Estoque Indisponível')
    }
}

export class QtdInsufficient extends BaseError{
    constructor(){
        super(400, 'Quantidade não disponível')
    }
}