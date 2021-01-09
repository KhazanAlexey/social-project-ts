import React from 'react';
import './App.css';

import Header from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from './Components/Users/Users-container';
import {DialogsHook} from "./Components/Dialogs/DialogsHook";
import ProfileContainerWithUrl from "./Components/Profile/Profile-Container";



function App(props:any) {


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

                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
