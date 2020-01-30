import React, { Component } from 'react';
import image from './logo.jpg'
class Header extends Component {
    render() {
        return (
            <div className='header p-1'>
                <img src={image} alt='' className='logo-header'/>
                <h1 className='title-header' >Making the healthcare experience more human </h1>
            </div>
        );
    }
}

export default Header;

