import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import {RegistrationPage} from './pages/RegistrationPage'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={LandingPage} />
            <Route path="/register" component={RegistrationPage} />
        </BrowserRouter>
    )
}

export default Routes