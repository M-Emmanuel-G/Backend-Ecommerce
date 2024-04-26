export interface UserModel{
    email:string,
    name:string,
    // password:string
}

export interface UpdateUserModes{
    id:string
    email:string,
    name:string,
    password:string
}

export interface UpdateUserModelDTO{
    id:string
    email?:string,
    name?:string,
    password?:string
}

export interface UpdateRoleUserModelDTO{
    adminID:string
    userID:string
    role:string
}

export interface UpdateRoleUserModel{
    userID:string
    role:string
}

export interface LoginModel{
    email:string
    // password:string
}
