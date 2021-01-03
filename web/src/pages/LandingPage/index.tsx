import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const LandingPage = () => {
    return (
        <div id="landing-page">
            <div id="login-form">
                <h1>Log-in</h1>
                <form>
                    <fieldset>
                        <div className="input-block">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" id="email" required/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="password">Senha</label>
                            <input type="password" name="password" id="password" required/>
                        </div>
                    </fieldset>
                    <button type="submit">
                        Entrar
                    </button>
                </form>
                <div id="links">
                    <Link to="/">Esqueci senha</Link>
                    <Link to="/register">Cadastro</Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage