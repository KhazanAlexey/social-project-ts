import {Dispatch} from "redux";
import {authAPI} from "../api/api";


const SET_USER_DATA = "SETUSERDATA"

type SETUSERDATAType = {
    type: typeof SET_USER_DATA
    data: any
}

// export type returnStateUserreducerType = ReturnType<typeof initialState>
const initialState: inittype = {
    id: null,
    email: null,
    login: null,
    isAuth: true
}
export type inittype = AuthType & { isAuth: boolean }


export type AuthType = {
    id: string | null
    email: string | null
    login: string | null
}

export type ActionsTypes = SETUSERDATAType
// export type ActionsTypes = ReturnType<typeof AddPostAC> | ReturnType<typeof ChangePostTextAС>

export const SetuserData = (data: AuthType): SETUSERDATAType =>
    ({type: SET_USER_DATA, data} as const)

export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        authAPI.me()
            .then((res) => {
                //isFetching setToogle
                if(res.data.resultCode ===0) {
                    dispatch(SetuserData(res.data.data))
                }

            })

    }
}


export function AuthReducer(state: inittype = initialState, action: ActionsTypes): inittype {
    switch (action.type) {
        case "SETUSERDATA":
            return {
                ...state, ...action.data, isAuth: true
            }

        default:
            return state;
    }


}

