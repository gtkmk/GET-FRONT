/* eslint-disable no-undef */
import React, { useEffect, useState, Component } from 'react'
import './dashboard.css'
import { MdApps, MdOutlineSegment } from "react-icons/md";


export default class Dashboard extends Component {

    render() {
        return (
            <div className='dashboard'>
                    <div class="iconbar">
                        <div class="icons">
                            <i class="icon ion-md-apps">
                                <MdApps />
                            </i>
                            <span>Home</span>
                        </div>
                        <div class="icons">
                            <i class="icon ion-md-list">
                                <MdOutlineSegment />
                            </i>
                            <span>Settings</span>
                        </div>
                    </div>
                


                
                
                <div className='content'>


                    <div className='box'>
                        <p id='origin'>Origem</p>
                        <span>Login: </span>
                        <input type="text" id="login" name="login" value="GTK@GMAIL.COM"></input>
                        <span>Senha: </span>
                        <input type="text" id="senha" name="senha" value="Senha123"></input>
                        <p id='type'>type</p>
                    </div>

                    <div className='box'>
                        <p id='origin'>Origem</p>
                        <span>Login: </span>
                        <input type="text" id="login" name="login" value="GTK@GMAIL.COM"></input>
                        <span>Senha: </span>
                        <input type="text" id="senha" name="senha" value="Senha123"></input>
                        <p id='type'>type</p>
                    </div>
                    <div className='box'>
                        <p id='origin'>Origem</p>
                        <span>Login: </span>
                        <input type="text" id="login" name="login" value="GTK@GMAIL.COM"></input>
                        <span>Senha: </span>
                        <input type="text" id="senha" name="senha" value="Senha123"></input>
                        <p id='type'>type</p>
                    </div>
                    

                </div>

            </div>


        );




    }
}