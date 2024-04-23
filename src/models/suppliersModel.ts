export interface SupplierModel{
    supplier:string
    cnpj:string
    address:string
    contact:string
    email:string
    userID:string
}

export interface UpdateSupplierModel{
    supplier?:string
    address?:string
    contact?:string
    email?:string
    supplierID:string
    userID:string
}