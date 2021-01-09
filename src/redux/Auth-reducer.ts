const SET_USER_DATA = "SETUSERDATA"
const UNFOLLOW = "UNFOLLOW"
const SETUSERS = "SETUSERS"
const SETPAGE = "SETAPGE"
const SETTOTALCOUNT= "SETTOTALCOUNT"
const TOOGLE_IS_FETCHING= "TOOGLEISFETCHING"


type SETUSERDATAType = {
    type: typeof SET_USER_DATA
    data: any
}

// export type returnStateUserreducerType = ReturnType<typeof initialState>
const initialState: inittype  = {
    id: null,
    email: null,
    login: null,
    isFetching: true
}
export type inittype = AuthType & {isFetching: boolean}


export type AuthType={
    id: string | null
    email: string | null
    login: string | null
}

export type ActionsTypes = SETUSERDATAType
// export type ActionsTypes = ReturnType<typeof AddPostAC> | ReturnType<typeof ChangePostTextAС>

export const SetuserData = (data:AuthType): SETUSERDATAType =>
    ({type: SET_USER_DATA, data} as const)

export function AuthReducer(state: inittype = initialState, action: ActionsTypes): inittype {
    switch (action.type) {
        case "SETUSERDATA":
            return {
                ...state,...action.data
            }

        default:
            return state;
    }


}

