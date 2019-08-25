import React, { Component } from 'react'



 class LoggedInNav extends Component {



    render() {

        return (
            <div>
                
            <div>

            

    <nav className="navbar navbar-light bg-light mb-3 float-right">
    
    <ul className="nav">
        <li className="nav-item">
        <button className="nav-link "  onClick={this.props.loggedInHandle}>Sign Out </button>
        </li> 
    </ul>
</nav>
  
    

              
            </div>
            </div>
        )
    }
}
export default LoggedInNav;