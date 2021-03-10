import React from 'react';


import './Footer.css';

class Footer extends React.Component {

    render() {
        return (
            //BEM naming convention
            //Block - Elemnt - Modifier
            <footer className="myFooter">
                <p className="footerText">©2021</p>
            </footer>
        )
    }

}

export default Footer;