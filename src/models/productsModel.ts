export interface Product{
    product: string;
    productPrice: number;
}

export interface ProductDTO{
    product: string;
    productPrice: number;
    userID:string
}

export interface UpdateProductStockModel{
    qtdStock:number
    productID:string
}