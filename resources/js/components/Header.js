import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from '../../../public/surepass/img/landing/logo.png'

export default class Header extends Component {
    
    render() {
        return (
            <header id="header" class="fixed-top header-transparent">
                <div class="container d-flex align-items-center">
                    <a href="#" class="logo mr-auto"><img src={logo} alt="SurePass Logo" class="img-fluid"/></a>

                    <nav class="main-nav d-none d-lg-block">
                        <ul>
                            <li class="active"><a href="#hero">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#services">Guide</a></li>  
                            <li><a href="#team">Team</a></li>
                            <li><a href="#faq">FAQ</a></li>
                            <li><a href="#login">Login</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
    );
    }
};