import React, { Component } from 'react';
import './Header.scss';

export default class Header extends Component {
    render() {
        return (
            <header>
                <img src={require('../../assets/images/logo.svg')} alt="" />
                React Redux Biolerplate By Bluecast Tech.
            </header>
        )
    }
}
