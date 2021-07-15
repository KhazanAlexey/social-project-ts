import {Dispatch} from "redux";
import {authAPI, LoginDataType, securityAPI} from "../api/api";
import {ThunkDispatch} from "redux-thunk";
import {stopSubmit, FormAction} from 'redux-form'
const SET_USER_DATA = "SETUSERDATA"
const GET_CAPTCHA_URL = "GETCAPTCHAURLSUCCESS"

type SETUSERDATAType = {
    type: typeof SET_USER_DATA
    data: any
}



const initialState: inittype = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaURL:null
}
export type inittype = AuthType & { isAuth: boolean } & {captchaURL:null | string}


export type AuthType = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean

}

export type ActionsTypes = SETUSERDATAType| ReturnType<typeof SetCaptchaURL>
// export type ActionsTypes = ReturnType<typeof AddPostAC> | ReturnType<typeof ChangePostTextAС>

export const SetuserData = (data: AuthType): SETUSERDATAType =>
    ({type: SET_USER_DATA, data} as const)
export const SetCaptchaURL = (url:string|null) =>
    ({type: GET_CAPTCHA_URL, url} as const)

export const getAuthUserData = () => async (dispatch: Dispatch) => {
        const res= await authAPI.me()
                //isFetching setToogle
                if (res.data.resultCode === 0) {
                    const result: AuthType = {...res.data.data, isAuth: true}
                    dispatch(SetuserData(result))
                }

    }

export function AuthReducer(state: inittype = initialState, action: ActionsTypes): inittype {
    switch (action.type) {
        case "SETUSERDATA":
            return {
                ...state, ...action.data
            }
        case "GETCAPTCHAURLSUCCESS":
            return {
                ...state,captchaURL:action.url
            }
        default:
            return state;
    }
}
// export function stopSubmit(form: string, errors?: Object): Action;
export const SendLoginData = (data: LoginDataType) => {
    return async (dispatch: ThunkDispatch<inittype, void, ActionsTypes | FormAction>) => {


      const res=await authAPI.login(data)
                //isFetching setToogle
                if (res.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                }
                else  {
                    if (res.data.resultCode===10) {
                      dispatch(getCaptchaUrl())
                    }

                        let message=res.data.messages.length>0 ? res.data.messages[0]: "some errore"
                        let action=stopSubmit('login',{_error:message})
                        dispatch(action)
                    }




}}

export const getCaptchaUrl = () => {
    return async (dispatch: ThunkDispatch<inittype, void, ActionsTypes>) => {
        // let action=stopSubmit("login",{_error:'incorrect email or password  '})
        // dispatch(action)

        const res=await securityAPI.grtCaptchaURL()
        //isFetching setToogle
        const capthcaURL=res.data.url
            dispatch(SetCaptchaURL(capthcaURL))
        }



}

export const Logout = () => {
    return (dispatch: ThunkDispatch<inittype, void, ActionsTypes>) => {
        authAPI.logout()
            .then((res) => {
                if (res.data.resultCode === 0) {
                    const data: AuthType = {id: null, email: null, login: null, isAuth: false}
                    dispatch(SetuserData(data))
                }


            })

    }
}
