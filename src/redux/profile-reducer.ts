export type PostType = {
    id: number
    message: string
    likeCounts: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: null | ProfileType
}

export type ProfileType = {
    userId: string
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
    newPostText: "it kamasyrtaaa"

}
export type returnStateProfilereducerType = typeof initialState

export type AddPostActionType = {
    type: typeof ADDPOST
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
export type ActionsTypes =
    AddPostActionType
    | UpdateTextPost
    | AddMessageActionType
    | UpdateTextMessage
    | SetUserProfileType

// export type ActionsTypes = ReturnType<typeof AddPostAC> | ReturnType<typeof ChangePostTextAС>


export const AddPostAC = () => ({type: "ADDPOST"} as const)
export const ChangePostTextAC = (text: string) => ({type: "CHANGEPOSTTEXT", text: text} as const)
export const setUserProfile = (profile: any) => ({type: "SETUSERPROFILE", profile})

export function profileReducer(state = initialState, action: ActionsTypes): returnStateProfilereducerType {
    switch (action.type) {
        case "ADDPOST":
            const NewPost: PostType = {
                id: 3,
                message: state.newPostText,
                likeCounts: 20
            }
            return {
                ...state, posts: [...state.posts, NewPost],
                newPostText: ""
            }
        case "CHANGEPOSTTEXT":
            return {
                ...state, newPostText: action.text
            }
        case "SETUSERPROFILE": {
            return {
                ...state, profile: action.profile
            }
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
