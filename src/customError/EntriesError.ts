import { BaseError } from "./baseErrors";

export class EntryNotFound extends BaseError{
    constructor(){
        super(400, 'Nota de entrada não encontrada!')
    }
}