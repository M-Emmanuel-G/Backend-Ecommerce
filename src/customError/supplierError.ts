import { BaseError } from "./baseErrors";

export class SupplierNotFound extends BaseError{
    constructor(){
        super(404, "Fornecedor nâo encontrado!")
    }
}