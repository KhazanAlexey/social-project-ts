import React, {useEffect, Suspense} from "react";
import './App.css';
import {useDispatch, useSelector} from 'react-redux'


import Header from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
// import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from './Components/Users/Users-container';
// import ProfileContainerWithUrl from "./Components/Profile/Profile-Container";
import {Login} from "./Components/Login/Login";
import {initializeApp} from "./redux/app-reducer";
import {RootState} from "./redux/redux-store";
import {Prealoader} from "./Components/common/Preloader";
import News from "./Components/News/News";
import {Files} from "./Components/Files/Files";

const DialogsContainer = React.lazy(() => import("./Components/Dialogs/DialogsContainer"));
const ProfileContainerWithUrl = React.lazy(() => import("./Components/Profile/Profile-Container"));


function App() {
    const dispatch = useDispatch()
    const initialized = useSelector<RootState, boolean>(state => state.app.initialized)
    const catchAllUnhandledErrors = (promiseRejectoionEvent: any) => {
        alert('some Error')
        debugger
        console.error(promiseRejectoionEvent)
    }
    useEffect(() => {
        dispatch(initializeApp())
        window.addEventListener('unhandledrejection', catchAllUnhandledErrors)
        return window.removeEventListener('unhandledrejection', catchAllUnhandledErrors)
    }, [dispatch])

    if (!initialized) {
        return <Prealoader/>
    }
    return (


        <Suspense fallback={<Prealoader/>}>
            <BrowserRouter>
                <div className='app-wrapper'>
                    <Header/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Switch>
                            <Route exact path='/' render={() => <Redirect to={'/profile'}
                            />}/>
                            <Route path='/news/:link?' render={() => <News/>}/>

                            <Route path='/profile/:userId?' render={() => <ProfileContainerWithUrl
                            />}/>


                            <Route path='/dialogs' render={() => <DialogsContainer
                            />}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/login' render={() => <Login/>}/>
                            <Route path='/files' render={() => <Files/>}/>
                            <Route path='*' render={() => <div>404 not found</div>}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        </Suspense>
    )
}

export default App;
