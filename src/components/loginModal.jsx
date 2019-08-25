import React, { Component } from 'react'
import PropTypes from 'prop-types';

 class LoginModal extends Component {
    
        state = {
          username: '',
          password: ''
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
            <div className="d-flex justify-content-center">
            <div className="modal justify-content-center" tabIndex="-1" role="dialog" style={{display: (this.props.show) ? 'inline-block' : 'none'}}>
            <div className="modal-dialog " role="document">

                <div className="modal-content ">
                    <div className="modal-header">
                        <h5 className="modal-title float-left">Sign in </h5>
                              
                    </div>
                    <div className="row">


                    <div className="modal-body col-12">
                    <form onSubmit={e => this.props.handle_login(e, this.state)}>

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
                            <label htmlFor="password">Password</label>
                            <input
          type="password"
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
</div>
        )
    }
}
export default LoginModal;

LoginModal.propTypes = {
    handle_login: PropTypes.func.isRequired
  };