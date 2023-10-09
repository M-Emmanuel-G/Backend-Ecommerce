import { BaseError } from "./baseErrors";

export class BodyNotInserted extends BaseError{
    constructor(){
        super(422, 'Todas as informacoes precisam ser inseridas.')
    }
}