import React, { useEffect, useState, Component } from 'react'
import './login.css'
import { MdEmail, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { render } from '@testing-library/react';
import { axios } from 'axios';

import api from '../../services/api'


export default class Login extends Component {


    constructor() {
        super()
        this.state = {
            message: '',
        }
    }

    signIn = () => {
        const data = { email: this.email, senha: this.senha}       
         
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'applicattion/json'
            }),
        };
        fetch('http://localhost:3000/usuario/login', requestInfo)
        .then(response => {
            if(response.ok) {
                return response.json();
                console.log(response);
            }
            throw new Error("Falha de autenticação!")
        })
        .then(token => {
            localStorage.setItem('token', token)
        })
        .catch(e => {
            this.setState({ message: e.message })
        })      
    }





    render(){
        return(
            <div className="login">
                <div className='login-logo'>
                    <img
                    src='https://www.freeiconspng.com/thumbs/access-icon/access-icon-8.png'
                    alt='Get Front'/>
                </div>

                <div className='login-right'>
                    <h1>Login GetPass</h1>

                    <div className='login-loginInputEmail'>
                        <MdEmail/>
                        <input
                            type="text"
                            placeholder="Digite seu Email" 
                            id="email"
                            onChange={e => this.email = e.target.value}
                        />
                    </div>

                    <div className='login-loginInputPassword'>
                        <MdLock />
                        <input 
                            type="password"
                            id="senha" 
                            placeholder="Informe sua senha"
                            onChange={e => this.senha = e.target.value}
                        />                        
                    </div>
                    <button type= "submit" onClick={this.signIn}>
                        Login
                    </button>
                    
                    {
                        this.state.message !== '' ? (
                            <h4> { this.state.message } </h4>
                        ) : <h4>Verifique suas informações antes de continuar!</h4>
                    }


                    <button type= "submit">
                        Cadastrar
                    </button>


                </div>

            </div>
        );


    }
}


/*
function signIn() {    
    const requestInfo = {
        method: 'POST',
        body: JSON.stringify({}),
        headers: new Headers({
            'Content-Type': 'applicattion/json'
        }),
    }

    fetch('http://localhost:3000/usuario/login', requestInfo)
    .then(response => {
        if(response.ok){
            return response.json()
        }
        throw new Error("Login inválido!");
    })
    .then(token => console.log(token))
    .catch( e => console.log(e)); 
    return (console.log("aa"));
}

const Login = () => {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show)
    }
    console.log(email)

    render(){

        return (
            <div className="login">
                <div className='login-logo'>
                    <img
                    src='https://www.freeiconspng.com/thumbs/access-icon/access-icon-8.png'
                    alt='Get Front'/>
                </div>

                <div className='login-right'>
                    <h1>Login GetPass</h1>

                    <div className='login-loginInputEmail'>
                        <MdEmail/>
                        <input
                            type="text"
                            placeholder="Digite seu Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div className='login-loginInputPassword'>
                        <MdLock />
                        <input
                            placeholder="Digite sua senha"
                            type={show ? "text" : "password" }                        
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <div className='login-eye'>
                            {show ? (
                                <HiEye 
                                    size={20}
                                    onClick={handleClick}
                                />
                            ) : (
                                <HiEyeOff 
                                    size={20}
                                    onClick={handleClick}
                                />
                            )}
                        </div>
                    </div>
                    <button type= "submit" onClick={this.signIn}>
                        Login
                    </button>

                    <h4>Verifique suas informações antes de continuar!</h4>

                    <button type= "submit">
                        Cadastrar
                    </button>


                </div>

            </div>
        );
    }
}
*/



//ultima versão antes de alterações de terça, 16 de agosto
/*
export default class Login extends Component {

    constructor() {
        super()
        this.state = {
            message: '',
        }
    }

    signIn = () => {
        const data = { email: this.email, senha: this.senha}        
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'applicattion/json',
                'Content-Length': data.byteLength
            }),
        };
        fetch('http://localhost:3000/usuario/login', requestInfo)
        .then(response => {
            if(response.ok) {
                return response.json()
            }
            throw new Error("Falha de autenticação!")
        })
        .then(token => console.log(token))
        .catch(e => console.log(e))      
    }





    render(){
        return(
            <div className="login">
                <div className='login-logo'>
                    <img
                    src='https://www.freeiconspng.com/thumbs/access-icon/access-icon-8.png'
                    alt='Get Front'/>
                </div>

                <div className='login-right'>
                    <h1>Login GetPass</h1>

                    <div className='login-loginInputEmail'>
                        <MdEmail/>
                        <input
                            type="text"
                            placeholder="Digite seu Email" 
                            id="email"
                            onChange={e => this.email = e.target.value}
                        />
                    </div>

                    <div className='login-loginInputPassword'>
                        <MdLock />
                        <input 
                            type="password"
                            id="senha" 
                            placeholder="Informe sua senha"
                            onChange={e => this.senha = e.target.value}
                        />                        
                    </div>
                    <button type= "submit" onClick={this.signIn}>
                        Login
                    </button>

                    <h4>Verifique suas informações antes de continuar!</h4>

                    <button type= "submit">
                        Cadastrar
                    </button>


                </div>

            </div>
        );


    }
}

*/