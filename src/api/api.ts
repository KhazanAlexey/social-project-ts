import axios from "axios"
import {userType} from "../redux/User-reducer";
import { AuthType } from "../redux/Auth-reducer";
import {ProfileDataFormType} from "../Components/Profile/ProfileInfo/ProfileInfoDataForm";

export type PropsType = {
    currentPage: number
    pageSize: number
}


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    headers: {
        'API-KEY': '1c6f1b8f-2a59-4119-a3a7-f3fc33e73942'
    }
})
// export const getUsers=(currentPage:number,pageSize:number) =>{
// return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//     .then(res=>res.data)
// }
export const UsersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    Follow(id: number) {
        return instance.post(`follow/${id}`, {})
            .then(res => res.data)
    },
    Unfollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(res => res.data)

    },
    getProfile(userId:string|null){
        return profileAPI.getProfile(userId)
    }



}
export const authAPI={
    me(){
        return instance.get<MeResponceType>(`auth/me`)
    },
    login(data:LoginDataType){
        return instance.post<LoginResponceType>(`auth/login/`,data)
    },
    logout(){
        return instance.delete<LogoutResponceType>(`/auth/login`)

    }
}



export const profileAPI= {
    getProfile(userId:string|null){
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId:string|null){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status:string){
        return instance.put(`profile/status`,{status:status})
    },
    savePhoto(photo:any){
        const formData=new FormData()
        formData.append('image',photo)
        return instance.put(`profile/photo`,formData,{headers:{
            'Content-Type': 'multipart/form-data'
            }})
    },
    saveProfile(profile:ProfileDataFormType){
        return instance.put('profile',profile)

    }
}
export const securityAPI={
    grtCaptchaURL(){
        return instance.get<CaptchaResponseType>(`security/get-captcha-url`)
    }
}


export type CaptchaResponseType={
    url:string
}
export type GetItemsType={
    items:Array<userType>
    totalCount:number
    error:string|null
}
export type MeResponceType={
    data:AuthType
    resultCode: number
    messages: Array<string>
}
export type LoginResponceType={
    data:{
        userId:number
    }
    resultCode: number
    messages: Array<string>
}
export type LoginDataType={
    email: string
    password:string
    rememberMe: boolean
    captcha?: string|null
}
 export type  LogoutResponceType ={
     resultCode: number
     messages: Array<string>
     data: object
 }