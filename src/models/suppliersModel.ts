export interface SupplierModel{
    supplier:string
    cnpj:string
    address:string
    contact:string
    email:string
}

export interface UpdateSupplierModel{
    address?:string
    contact?:string
    email?:string
    supplierID:string
}