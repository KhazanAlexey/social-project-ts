import {combineReducers,applyMiddleware, createStore, Store} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {UserReducer} from "./User-reducer";
import {AuthReducer} from "./Auth-reducer";
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk'


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: UserReducer,
    auth: AuthReducer,
    form: formReducer
})
export let store: StoreType = createStore(reducers,applyMiddleware(thunk))
export type RootState = ReturnType<typeof reducers>
export type StoreType = Store<RootState>


