export interface OutPutProductsModelDTO{
    qtd:number
    clientID: string,
    productID:string
    userID:string
}

export interface OutPutProductsModel{
    qtd:number
    date:string
    clientID: string,
    productID:string
}

export interface UpdateOutPutProductsModel{
    qtdStock:number
    productID:string
}
