import React, { Component } from 'react'
import PropTypes from 'prop-types';

 class RegisterModal extends Component {
    state = {
          username: '',
          password: '',
          email:''
        };
      
      handle_change = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevstate => {
          const newState = { ...prevstate };
          newState[name] = value;
          return newState;
        });
      };

    


    render() {
        return (
            <div className="modal" tabIndex="-1" role="dialog" style={{display: (this.props.show) ? 'inline-block' : 'none'}}>
            <div className="modal-dialog " role="document">

                <div className="modal-content ">
                    <div className="modal-header">
                        
                        <h5 className="modal-title float-right">Register </h5>        
                    </div>
                    <div className="row">


                    

                    <div className="modal-body col-12">
                    <form onSubmit={e => this.props.handle_signup(e, this.state)}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handle_change}
        />
    
                        </div>
                        <div className="form-group">
                            <label htmlFor="registerEmail">Email</label>
                            <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handle_change}
        />
    
                        </div>
                        <div className="form-group">
                            <label htmlFor="registerPassword">Password</label>
                            <input
          type="text"
          name="password"
          value={this.state.password}
          onChange={this.handle_change}
        />
                        </div>
                        <input type="submit" />
                    </form>
                        
                    </div>
                    </div>
                    <button  
                className="bg-danger text-light" onClick={this.props.handleClose}>close</button>
                </div>
                
              
            </div>
        </div>

        )
    }
}
export default RegisterModal;

RegisterModal.propTypes = {
    handle_signup: PropTypes.func.isRequired
  };