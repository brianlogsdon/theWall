import React, { Component } from 'react'



 class LoggedOutNav extends Component {

    

    render() {

        return (
            
          <div>  

    <nav className="navbar navbar-light bg-light mb-3">
    
    <ul className="nav">
   
  <li className="nav-item">
    <button className="nav-link "  onClick={this.props.showLoginModal}>Sign in </button>
    </li>
    <li>
    <button className="nav-link "  onClick={this.props.showRegisterModal}> Register</button>
  </li> 
  </ul>
  </nav>
    

              
            </div>
            
        )
    }
}
export default LoggedOutNav;