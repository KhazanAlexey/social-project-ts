import React, {useEffect, Suspense} from "react";
import './App.css';
import {useDispatch, useSelector} from 'react-redux'


import Header from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {BrowserRouter, Route} from 'react-router-dom';
// import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from './Components/Users/Users-container';
import {DialogsHook} from "./Components/Dialogs/DialogsHook";
// import ProfileContainerWithUrl from "./Components/Profile/Profile-Container";
import {Login} from "./Components/Login/Login";
import {initializeApp} from "./redux/app-reducer";
import {RootState} from "./redux/redux-store";
import {Prealoader} from "./Components/common/Preloader";
import News from "./Components/News/News";
import { Files } from "./Components/Files/Files";
const DialogsContainer = React.lazy(() => import("./Components/Dialogs/DialogsContainer"));
const ProfileContainerWithUrl = React.lazy(() => import("./Components/Profile/Profile-Container"));


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


        <Suspense fallback={<Prealoader/>}>
            <BrowserRouter>
                <div className='app-wrapper'>
                    <Header/>
                    <Navbar/>
                    <div className='app-wrapper-content'>

                        <Route path='/news/:link?' render={() => <News/>}/>
                        <Route exact path='/profile/:userId?' render={() => <ProfileContainerWithUrl
                        />}/>
                        <Route path='/dialogsHook' render={() => <DialogsHook
                        />}/>
                        <Route path='/dialogs' render={() => <DialogsContainer
                        />}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='/files' render={() => <Files/>}/>

                    </div>
                </div>
            </BrowserRouter>
        </Suspense>
    )
}

export default App;
