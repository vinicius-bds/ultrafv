import React from 'react'
import { Link } from 'react-router-dom'
import arrowLeftIcon from '../../assets/icons/arrow-left.svg'
import './styles.css'

export const RegistrationPage = () => {
    return (
        <div id="registration-page">
            <div id="register-form">
                <Link to="/">
                    <img src={arrowLeftIcon} alt="Voltar"/>
                </Link>
                <form>
                    <h1>Formulário de cadastro</h1>
                    <legend>Preencha todos os dados para cadastrar-se.</legend>
                    <fieldset>
                        <div className="input-block">
                            <label htmlFor="name">Nome completo</label>
                            <input type="text" name="text" id="text" required/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="username">Nome de usuário</label>
                            <input type="text" name="username" id="username" required/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" id="email" required/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="password">Senha</label>
                            <input type="password" name="password" id="password" required/>
                        </div>
                    </fieldset>
                    <button>
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    )
}
