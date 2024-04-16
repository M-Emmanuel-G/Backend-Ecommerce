export interface Product{
    product: string;
    productPrice: number;
}

export interface ProductDTO{
    product: string;
    productPrice: number;
}

export interface UpdateProductStockModel{
    qtdStock:number
    productID:string
}