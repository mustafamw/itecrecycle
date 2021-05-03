import React, { Component } from "react";
import facebook from '../../assets/img/social/Facebook.png';
import instagram from '../../assets/img/social/Instagram.png';
import './Social.scss';

class Social extends Component{
  render(){
    return (
        <div id="shares" className="shares">
            <div className="share">
                <a href="#" rel="noopener noreferrer" target="_blank">
                    <img src={facebook} alt="Facebook" id="fb-share-button"/>
                </a>
            </div>
            <div className="share">
                <a href="https://www.instagram.com/itecrecycle/" rel="noopener noreferrer" target="_blank">
                    <img src={instagram} alt="Instagram"/>
                </a>
            </div>
        </div>
    );
  }
}

export default Social;
