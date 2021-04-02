import {ThunkDispatch} from "redux-thunk"
import {getAuthUserData} from "./Auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"

interface inittype {
    initialized: boolean
}

const initialState = {
    initialized: false
}
type InitializedSuccessType = ReturnType<typeof InitializedSuccess>
type ActionsTypes = InitializedSuccessType


export function AppReducer(state: inittype = initialState, action: ActionsTypes): inittype {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state, initialized: true
            }
        default:
            return state;
    }
}

export const InitializedSuccess = () => ({type: INITIALIZED_SUCCESS} as const)

export const initializeApp = () => {
    return (dispatch: ThunkDispatch<inittype, void, ActionsTypes>) => {
        let promise = dispatch(getAuthUserData())
        promise.then(() => {
            dispatch(InitializedSuccess())
        })
    }
}