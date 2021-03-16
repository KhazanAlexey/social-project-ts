import {Dispatch} from "redux";
import {authAPI, LoginDataType} from "../api/api";
import {ThunkDispatch} from "redux-thunk";

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
    isAuth: false
}
export type inittype = AuthType & { isAuth: boolean }


export type AuthType = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean
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
                if (res.data.resultCode === 0) {
                    const result: AuthType = {...res.data.data, isAuth: true}
                    dispatch(SetuserData(result))
                }

            })

    }
}


export function AuthReducer(state: inittype = initialState, action: ActionsTypes): inittype {
    switch (action.type) {
        case "SETUSERDATA":
            return {
                ...state, ...action.data
            }

        default:
            return state;
    }


}

export const SendLoginData = (data: LoginDataType) => {
    return (dispatch: ThunkDispatch<inittype, void, ActionsTypes>) => {
        authAPI.login(data)
            .then((res) => {
                //isFetching setToogle
                if (res.data.resultCode === 0) {

                    dispatch(getAuthUserData())

                }

            })
            .catch(e => {
                console.log(e)
            })

    }
}

export const Logout = () => {
    return (dispatch: ThunkDispatch<inittype, void, ActionsTypes>) => {
        authAPI.logout()
            .then((res) => {
                //isFetching setToogle
                if (res.data.resultCode === 0) {
                    const data: AuthType = {id: null, email: null, login: null, isAuth: false}
                    dispatch(SetuserData(data))
                }


            })

    }
}
