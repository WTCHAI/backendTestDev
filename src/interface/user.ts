export interface userFormType {
    name : string 
    email : string
    password : string
}

export interface User{
    id ?: number
    name : string
    email : string
    password : string
    studentId ?: string
}

export interface UserResponse{
    data ?: User
    message ?: string
    status ?: number
}