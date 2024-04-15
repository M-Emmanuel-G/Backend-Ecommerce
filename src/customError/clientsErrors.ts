import { BaseError } from "./baseErrors";

export class AvailableInvalid extends BaseError{
    constructor(){
        super(400, 'Disponibilidade invalida!')
    }
}