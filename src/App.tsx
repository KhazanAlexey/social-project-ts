import React, {useEffect, useCallback} from "react";
import './App.css';
import {useDispatch, useSelector} from 'react-redux'


import Header from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from './Components/Users/Users-container';
import {DialogsHook} from "./Components/Dialogs/DialogsHook";
import ProfileContainerWithUrl from "./Components/Profile/Profile-Container";
import {Login} from "./Components/Login/Login";
import {getAuthUserData} from "./redux/Auth-reducer";
import {initializeApp} from "./redux/app-reducer";
import {RootState} from "./redux/redux-store";
import {Prealoader} from "./Components/common/Preloader";



function App() {
const dispatch=useDispatch()
const initialized=useSelector<RootState,boolean>(state=>state.app.initialized)

    useEffect(() => {
       dispatch(initializeApp())
    }, [dispatch])

    if(!initialized){
        return <Prealoader/>
    }
    return (



        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={() => <ProfileContainerWithUrl
                       />}/>
                       <Route path='/dialogsHook' render={() => <DialogsHook
                       />}/>
                    <Route path='/dialogs' render={() => <DialogsContainer
                    />}/>
                    <Route path='/users' render={()=><UsersContainer/>}/>
                    <Route path='/login' render={()=><Login/>}/>

                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
