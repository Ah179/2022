import { Component } from "react";
import brightform from '../Images/brightform.png'

class LoginNavbar extends Component{
    render(){
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo"><img src= {brightform} /></h1>
                <div className = "menu-icon">

                </div>
            </nav>
        )
    }
}

export default LoginNavbar;