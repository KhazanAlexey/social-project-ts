
import {Dispatch} from "redux";
import {UsersAPI} from "../api/api";


const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SETUSERS = "SETUSERS"
const SETPAGE = "SETAPGE"
const SETTOTALCOUNT = "SETTOTALCOUNT"
const TOOGLE_IS_FETCHING = "TOOGLEISFETCHING"
const TOOGLE_IS_FOLLOWING_PROGRESS = 'TOOGLE_IS_FOLLOWING_PROGRESS'

type TOOGLEISFOLLOWINGPROGRESSType = {
    type: typeof TOOGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    id:number
}
type SETTOOGLEType = {
    type: typeof TOOGLE_IS_FETCHING
    isFetching: boolean
}
type SETTOTALCOUNTType = {
    type: typeof SETTOTALCOUNT
    count: number
}
type SETPAGEType = {
    type: typeof SETPAGE
    page: number
}
type FOLLOWType = {
    type: typeof FOLLOW
    id: number
}
type UNFOLLOWType = {
    type: typeof UNFOLLOW
    id: number
}
type SETUSERSType = {
    type: typeof SETUSERS
    users: any
}
// export type returnStateUserreducerType = ReturnType<typeof initialState>
const initialState: inittype = {
    users: [],
    pageSize: 5,
    totalCount: 100,
    currentPage: 1,
    isFetching: true,
    followingProgress: [] as Array<number>
}
export type inittype = {
    users: Array<usersTypeRes>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: Array<any>
}
export type usersTypeRes = {

    name: string
    id: number
    uniqueUrlName: null | string
    photos: phototype
    status: null | string
    followed: boolean

}
type phototype = {
    small: string
    large: string
}
export  type    userType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: locationtype
}
type locationtype = {
    city: string
    country: string
}

let initialStatetype2 = {
    users: [] as Array<userType>, //user type undefined
    pageSize: 10,
    totalUssrCount: 0,
    currentPage: 1,
    isFetching: true,
    followingProgress: [] as Array<number>
}
let initialStateType = typeof initialStatetype2
export type ActionsTypes = FOLLOWType |
    UNFOLLOWType | SETUSERSType |
    SETPAGEType | SETTOTALCOUNTType |
    SETTOOGLEType | TOOGLEISFOLLOWINGPROGRESSType
// export type ActionsTypes = ReturnType<typeof AddPostAC> | ReturnType<typeof ChangePostTextAС>

export const SetCurrentPageAc = (page: number): SETPAGEType =>
    ({type: SETPAGE, page} as const)
export const FollowAc = (id: number): FOLLOWType =>
    ({type: FOLLOW, id} as const)
export const UnfollowAc = (id: number): UNFOLLOWType =>
    ({type: UNFOLLOW, id} as const)
export const SetUsers = (users: any): SETUSERSType =>
    ({type: SETUSERS, users})
export const setTotalCount = (count: number) =>
    ({type: SETTOTALCOUNT, count} as const)
export const setToogle = (isFetching: boolean) =>
    ({type: TOOGLE_IS_FETCHING, isFetching} as const)
export const toggleisfolowingProgress = (isFetching: boolean,id:number) =>
    ({type: TOOGLE_IS_FOLLOWING_PROGRESS, isFetching,id} as const)
export function UserReducer(state: inittype = initialState, action: ActionsTypes): inittype {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state, users: [...state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u
                })]
            }
        case "TOOGLE_IS_FOLLOWING_PROGRESS": {
            debugger
            return {...state,
                followingProgress: action.isFetching ?
                    [...state.followingProgress, action.id] :
                    [state.followingProgress.filter(u => u.id !== action.id)]
            }
        }
        case "UNFOLLOW":
            return {

                ...state, users: [...state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u
                })]
            }
        case "SETAPGE":
            return {
                ...state, currentPage: action.page
            }
        case "SETUSERS":

            return {...state, users: action.users}
        case  "SETTOTALCOUNT":
            return {
                ...state, totalCount: action.count
            }
        case "TOOGLEISFETCHING": {
            return {
                ...state, isFetching: action.isFetching
            }
        }

        default:
            return state;
    }


}
export const getUsersTC=(currentPage:number,pageSize:number)=>{
    return (dispatch: Dispatch)=>{
        dispatch(setToogle(true))
        UsersAPI.getUsers(currentPage,pageSize)
            .then((data) => {
                //isFetching setToogle
                dispatch(setToogle(false))
                dispatch(SetUsers(data.items))
                dispatch(setTotalCount(data.totalCount))

            })
    }
}
