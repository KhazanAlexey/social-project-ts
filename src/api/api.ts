import axios from "axios"

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
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
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
    getProfile(userId:string){
        return instance.get(`profile/${userId}`)
    }


}
export const authAPI={
    me(){
        return instance.get(`auth/me`)
    }
}