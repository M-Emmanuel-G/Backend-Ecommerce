export interface ClientsModel{
    name: string,
    address: string,
    contact: string, 
    email: string
    userID:string
}

export interface ClientsUpdateModel{
    name: string,
    address: string,
    contact: string, 
    email: string
    id:string
    available:boolean
    userID: string
}

export interface updateClientAvailable{
    available:boolean
    id:string
    userID:string
}