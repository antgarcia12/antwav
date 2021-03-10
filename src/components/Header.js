import React from 'react';
import antPic from './media/images/myselfOcean.jpg';

import './Header.css';

class Header extends React.Component {

    render() {
        return (
            //BEM naming convention
            //Block - Elemnt - Modifier
            <header className="header">
                <h1 className="header__title ant">ANT</h1>
                <img className="header__logo" alt="Anthony by the Ocean" src={antPic}></img>
                <h1 className="header__title wav">WAV</h1>
            </header>

        )
    }

}

export default Header;