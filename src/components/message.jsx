import React, { Component } from 'react'

 class Message extends Component {
    render() {
        return (
        <div className="row d-flex justify-content-center">
        <div className="card mb-3 col-8 ">
            <div>            
                <h5 className=" card-title float-left ">@{this.props.name}</h5> 
                <p className="float-right">{this.props.date}</p>
            </div>
            <div className="card-body ">
                         
                <p className="card-text">{this.props.message}</p>
            </div>
        </div>
</div>
        )
    }
}
export default Message;