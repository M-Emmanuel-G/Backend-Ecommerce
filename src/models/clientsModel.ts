export interface ClientsModel{
    name: string,
    address: string,
    contact: string, 
    email: string
}

export interface ClientsUpdateModel{
    name: string,
    address: string,
    contact: string, 
    email: string
    id:string
    available:boolean
}

export interface updateClientAvailable{
    available:boolean
    id:string
}