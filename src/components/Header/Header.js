import React from 'react';
import Img from 'react-image';

require('./styles.header.scss');

class Header extends React.Component {
    render() {
        return (
            <div className="header-topbar">
                <a href="">
                <Img src={require("../images/logo.png")}/>
                </a>
                <Img src={require("../images/poem_lines.png")}/>
                <div className="social-network-tray">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/kmohan.vivek">
                                <Img src={require("../images/facebook_logo.png")}/></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/keviv90">
                                <Img src={require("../images/twitter_logo.png")}/></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/vivek164/">
                            <Img src={require("../images/insta_logo.png")}/></a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;