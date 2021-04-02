import {profileAPI, UsersAPI} from "../api/api"
import {Dispatch} from 'redux'

export type PostType = {
    id: number
    message: string
    likeCounts: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    profile: null | ProfileType
    status: string
}

export type ProfileType = {
    userId: string
    aboutMe: null | string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType

}
export type PhotosType = {
    small: string
    large: string
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
const ADDPOST = "ADDPOST"
const CHANGEPOSTTEXT = "CHANGEPOSTTEXT"
const ADDMESSAGE = "ADDMESSAGE"
const CHANGEMESSAGE = "CHANGEMESSAGE"
const SETUSERPROFILE = "SETUSERPROFILE"
const SETSTATUS = "SETSTATUS"

let initialState: ProfilePageType = {

    profile: null,
    posts: [
        {id: 1, message: "its my first yeSS post", likeCounts: 10},
        {id: 2, message: "hi howe are you", likeCounts: 15},
        {id: 3, message: "itkamasytra", likeCounts: 15},
        {id: 4, message: "yo", likeCounts: 15},
        {id: 5, message: "youuu", likeCounts: 15},
        {id: 6, message: "meas6", likeCounts: 15},
    ],
    status: 'new2'

}
export type returnStateProfilereducerType = typeof initialState

export type AddPostActionType = {
    type: typeof ADDPOST
    text: string

}
export type UpdateTextPost = {
    type: typeof CHANGEPOSTTEXT
    text: string
}
export type SetUserProfileType = {
    type: typeof SETUSERPROFILE
    profile: any
}

export type AddMessageActionType = {
    type: typeof ADDMESSAGE
}
export type UpdateTextMessage = {
    type: typeof CHANGEMESSAGE
    text: string
}
export type setUserStatusType = {
    type: typeof SETSTATUS
    status: string
}
export type ActionsTypes =
    AddPostActionType
    | UpdateTextPost
    | AddMessageActionType
    | SetUserProfileType
    | setUserStatusType

// export type ActionsTypes = ReturnType<typeof AddPostAC> | ReturnType<typeof ChangePostTextAС>


export const AddPostAC = (    text: string) => ({type: "ADDPOST",    text} as const)
export const ChangePostTextAC = (text: string) => ({type: "CHANGEPOSTTEXT", text: text} as const)
export const setUserProfile = (profile: any) => ({type: "SETUSERPROFILE", profile})
export const setUserStatus = (status: string) => ({type: "SETSTATUS", status})
export const getUserProfile = (userID: string|null) => {
    return (dispatch: Dispatch) => {
        UsersAPI.getProfile(userID)
            .then((res) => {
                dispatch(setUserProfile(res.data))
            })
    }
}
export const getUserstatus =(userId:string|null)=>{
    return (dispatch:Dispatch)=>{
        profileAPI.getStatus(userId)
            .then((res)=>{
                dispatch(setUserStatus(res.data))
            })
    }
}
export const updateStatus = (status:string)=>{
    return (dispatch:Dispatch)=>{
        profileAPI.updateStatus(status)
            .then((res)=>{
                if(res.data.resultCode===0){
                    dispatch(setUserStatus(status))
                }
            })
    }
}

export function profileReducer(state = initialState, action: ActionsTypes): returnStateProfilereducerType {
    switch (action.type) {
        case "ADDPOST":
            const NewPost: PostType = {
                id: 3,
                message: action.text,
                likeCounts: 20
            }
            return {
                ...state, posts: [...state.posts, NewPost],
            }

        case "SETUSERPROFILE": {
            return {
                ...state, profile: action.profile
            }
        }
        case "SETSTATUS":{
            return {...state,status:action.status}
        }
        default:
            return state
    }

}


//
// export const addPost=()=>{
//     return async (dispatch:any)=>dispatch(AddPostAC())
// }
// export const newposttextHandler=(text: string) => {
//     return async (dispatch:any)=>{
//     dispatch(ChangePostTextAС(text))}
// }
//
