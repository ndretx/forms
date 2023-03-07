import UserModel from "../model/user-model";

export interface Props{

}

export interface ControllerState{
    name:string;
    email:string;
    address: string;
    phone: any;
    message: string;
    formSent: boolean
} 

export interface ViewState{
    name: string;
    email: string;
    message: string;
    address: string;
    phone: any;
    handleChange: any; 
    handleSubmit: any;
}

export interface ViewProps{
    name: string;
    email: string;
    message: string;
    address: string;
    phone: any;
    handleChange: any; 
    handleSubmit: any;
    formSent: boolean;
}

export interface HttpResponse{
    message: string;
    status: number;
    data: any
}