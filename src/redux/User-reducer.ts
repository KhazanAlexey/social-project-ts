const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SETUSERS = "SETUSERS"
const SETPAGE = "SETAPGE"
const SETTOTALCOUNT= "SETTOTALCOUNT"
const TOOGLE_IS_FETCHING= "TOOGLEISFETCHING"

type SETTOOGLEType={
    type: typeof TOOGLE_IS_FETCHING
    isFetching: boolean
}
type SETTOTALCOUNTType={
    type: typeof SETTOTALCOUNT
    count:number
}
type SETPAGEType = {
    type: typeof SETPAGE
    page: number
}
type FOLLOWType = {
    type: typeof FOLLOW
    id: string
}
type UNFOLLOWType = {
    type: typeof UNFOLLOW
    id: string
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
    currentPage: 2,
    isFetching: true
}
export type inittype = {
    users: Array<usersTypeRes>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}
export type usersTypeRes = {

    name: string
    id: string
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
    id: string
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
export type ActionsTypes = FOLLOWType | UNFOLLOWType | SETUSERSType | SETPAGEType |SETTOTALCOUNTType | SETTOOGLEType
// export type ActionsTypes = ReturnType<typeof AddPostAC> | ReturnType<typeof ChangePostTextAС>

export const SetCurrentPageAc = (page: number): SETPAGEType =>
    ({type: SETPAGE, page} as const)
export const FollowAc = (id: string): FOLLOWType =>
    ({type: FOLLOW, id} as const)
export const UnfollowAc = (id: string): UNFOLLOWType =>
    ({type: UNFOLLOW, id} as const)
export const SetUsers = (users: any): SETUSERSType =>
    ({type: SETUSERS, users})
export const setTotalCount= (count:number) =>
    ({type: SETTOTALCOUNT, count} as const)
export const setToogle= (isFetching:boolean)=>
    ({type: TOOGLE_IS_FETCHING, isFetching} as const)

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
                ...state,totalCount:action.count
            }
        case "TOOGLEISFETCHING":{
            return {...state,isFetching:action.isFetching
            }
        }

        default:
            return state;
    }


}

