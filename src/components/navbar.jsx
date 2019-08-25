import React, { Component } from 'react'
import LoginModal from './loginModal.jsx';
import RegisterModal from './registerModal.jsx';
import MessageInput from './messageTextBox.jsx';

 class Navbar extends Component {

    state = { loginShow: false,
               registerShow:false,
               logged_in: localStorage.getItem('token') ? true : false,

             };

  showLoginModal = () => {
    this.setState({ loginShow: true });
  };

  hideLoginModal = () => {
    this.setState({ loginShow: false });
  };
  showRegisterModal = () => {
    this.setState({ registerShow: true });
  };

  hideRegisterModal = () => {
    this.setState({ registerShow: false });
  };
  handle_login = () => {
      this.setState({ logged_In : true});
  }
  handle_signup = () => {
    this.setState({ logged_In : true});
}


    render() {

        return (
            <div>
                <LoginModal show={this.state.loginShow} handleClose={this.hideLoginModal} handle_login={this.handle_login} />
                <RegisterModal show={this.state.registerShow} handleClose={this.hideRegisterModal} handle_signup={this.handle_signup} />
            <div>

            
{this.state.logged_in ? 
    <nav className="navbar navbar-light bg-light mb-3">
    <MessageInput />
    <ul className="nav">
        <li className="nav-item">
        <button className="nav-link "  onClick={this.loggedInHandle}>Sign Out </button>
        </li> 
    </ul>
</nav>:
    <nav className="navbar navbar-light bg-light mb-3">
  <ul className="nav ">
      
  <li className="nav-item">
    <button className="nav-link "  onClick={this.showLoginModal}>Sign in </button>
    </li>
    <li>
    <button className="nav-link "  onClick={this.showRegisterModal}> Register</button>
  </li> 
  </ul>
  </nav>
    
}
              
            </div>
            </div>
        )
    }
}
export default Navbar;