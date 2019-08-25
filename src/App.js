import React, { Component } from 'react';

import './App.css';
import LoggedOutNav from './components/logged_out_nav';
import LoggedInNav from './components/logged_in_nav';
import Message from './components/message';
import MessageInput from './components/messageTextBox.jsx';
import LoginModal from './components/loginModal.jsx';
import RegisterModal from './components/registerModal.jsx';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logged_in: localStorage.getItem('token') ? true : false,
      loading:true,
      username:'',
      messages: [],
      loginModal:false,
      registerModal:false
    };
  
    this.handle_new_message = this.handle_new_message.bind(this);
  }
//Handles the showing and hiding of the login and register modal
loginModal = () => {
  this.setState(prevState => ({
    loginModal: !prevState.loginModal
  }));
}

registerModal = () => {
  this.setState(prevState => ({
    registerModal: !prevState.registerModal
  }));
}

handle_new_message = (e, data) =>{
 //called after successful new message to update the message array
 
  var update=() =>{
   fetch('https://brianlogsdon2.pythonanywhere.com/messages/?ordering=-id')
   .then(response=>(response.json()))
   .then(data => { 
     this.setState({messages:data}); 
   }) 
   }
 //post new message
   e.preventDefault();
   fetch('https://brianlogsdon2.pythonanywhere.com/messages/', {
     method: 'POST',
     headers: {"Authorization": `JWT ${localStorage.getItem('token')}`,
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(data)
   })
   .then(update); 
 }

handle_signup = (e, data) => {
  e.preventDefault();
  fetch('https://brianlogsdon2.pythonanywhere.com/core/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(json => {
      localStorage.setItem('token', json.token);
      this.setState({
        logged_in: true,
        displayed_form: '',
        username: json.username
      });
    })
    .then(this.registerModal);;
};


handle_login = (e, data) => {
  e.preventDefault();
  fetch('https://brianlogsdon2.pythonanywhere.com/token-auth/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(json => {
      localStorage.setItem('token', json.token);
      this.setState({
        logged_in: true,
        username: json.user.username
      })
      
    })
    .then(this.loginModal);
};

handle_logout = () => {
  localStorage.removeItem('token');
  this.setState({ logged_in: false, username: '' });
};


//when component mounts check if there is a stored token and fetch the messages
  async componentDidMount() {
    if (this.state.logged_in) {
      fetch('https://brianlogsdon2.pythonanywhere.com/core/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username });
          
        });
    }
    const url = "https://brianlogsdon2.pythonanywhere.com/messages/?ordering=-id";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ messages: data, loading: false });
  }
 
  render() {
    const { messages } = this.state;
    //Wait for API response to continue
    if (this.state.loading) {
      return <div>loading...</div>;
    }

   
    return (
      <div className="App">   
                <LoginModal show={this.state.loginModal} handleClose={this.loginModal} handle_login={this.handle_login} />
                <RegisterModal show={this.state.registerModal} handleClose={this.registerModal} handle_signup={this.handle_signup} />
        <div className="App-header">
         
          <h2> THE WALL</h2>
         
        </div>
        {this.state.logged_in ?
        <div>
        
        <LoggedInNav loggedInHandle={this.handle_logout}/>
        <MessageInput name={this.state.username} handle_new_message={this.handle_new_message}/>
        </div>:
        <div>
        <LoggedOutNav showLoginModal={this.loginModal} showRegisterModal={this.registerModal} />
        
        </div>}
      
        {messages.map((user,index) =>
        <Message key={user.id} name={user.name} message={user.message}  />
        )
        
        }
        
      </div>
    );
  }
}

export default App;
