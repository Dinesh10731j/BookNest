export interface contactType{
    name:string,
    email:string,
    message:string,

};


export interface loginType{
    email:string,
    password:string
};


export interface signupType{
    name:string,
    email:string,
    password:string,

};


export interface bookListType{
    _id: string;
    title: string;
    genre: string;
    Author:{
        _id:string,
        author:string

    },
    coverImage: string;
    file: string;
    createdAt: string; 
    updatedAt: string;
}


export interface userIdType{
    userId:string
}