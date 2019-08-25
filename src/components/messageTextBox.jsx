import React, { Component } from 'react'

 class MessageInput extends Component {


  state = {
    name: this.props.name,
    message:'',

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
          <div className="row d-flex justify-content-center">
            <form className="col-7 mb-3 mt-3 border" onSubmit={e => this.props.handle_new_message(e, this.state)}>
            <div className="form-group ">
            <label htmlFor="exampleFormControlTextarea1">Enter Your Message</label>
            <textarea className="form-control" name="message" type="text" value={this.state.message}
          onChange={this.handle_change} rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-primary" >Submit</button>
          </form>
        </div>
        )
    }
}
export default MessageInput;