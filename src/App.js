import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Main from "./components/Main/Main";
import Authorization from "./components/Authorization/Authorization";
import Registration from "./components/Registration/Registration";
import HomePage from "./components/HomePage/HomePage";

const App = () => {

    return (
        <div>
            <Routes>
                <Route exact path={'/'} element={<Main/>}/>
                <Route exact path={'/sign-in'} element={<Authorization/>}/>
                <Route exact path={'/sign-up'} element={<Registration/>}/>
                <Route exact path={'/home'} element={<HomePage/>}/>
            </Routes>
        </div>
    );
};

export default App;