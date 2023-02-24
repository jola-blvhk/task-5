import { Component } from "react";
import profilepicture from '../../assets/profile-picture.jpg';
import dropdown from '../../assets/dropdown.png';
import './header.styles.css';

class Header extends Component {
    render() {
        return(
            <div className="header-flex">
                <h2>Store</h2>
                <div className="flex">
                    <img className="profilepicture" src={profilepicture}/>
                    <p className="user">Kola</p>
                    <img className="dropdown" src={dropdown}/>
                </div>
            </div>
        )
    }
}

export default Header;