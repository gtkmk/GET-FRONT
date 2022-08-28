import React, { useState } from 'react'
import './cadastro.css'
import { MdEmail, MdLock, MdPerson, MdPersonAdd } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi"

const Cadastro = () => {
    
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(true)

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show)
    }

    return (
        <div className="cadastro">
            <div className='cadastro-logo'>
                <img
                src='https://www.freeiconspng.com/thumbs/access-icon/access-icon-8.png'
                alt='Get Front'/>
            </div>

            <div className='cadastro-right'>
                <h1>Cadastro GetPass</h1>
                <div className='cadastro-cadastroInputComum'>
                    <MdPerson/>
                    <input
                        type="text"
                        placeholder="Nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                </div>
                
                <div className='cadastro-cadastroInputComum'>
                    <MdPersonAdd/>
                    <input
                        type="text"
                        placeholder="Sobrenome"
                        value={sobrenome}
                        onChange={e => setSobrenome(e.target.value)}
                    />
                </div>

                <div className='cadastro-cadastroInputComum'>
                    <MdEmail/>
                    <input
                        type="text"
                        placeholder="Digite seu Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className='cadastro-cadastroInputPassword'>
                    <MdLock />
                    <input
                        placeholder="Digite sua senha"
                        type={show ? "text" : "password" }                        
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <div className='cadastro-eye'>
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

                <h4>Verifique suas informações antes de continuar!</h4>

                <button type= "submit">
                    Cadastrar
                </button>


            </div>

        </div>
    )
}

export default Cadastro;