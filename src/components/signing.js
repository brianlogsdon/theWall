signup=(username, password, email)=>{
    let newUser={username:username,password:password, email:email};
    
    window.console.log(newUser);
    
    
    //recieve JWT token 
    fetch('http://127.0.0.1:8000/core/users/', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newUser)
     
    })
    .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        window.console.log(json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.username
        });
      });  
};

login=(username, password)=>{
    let newUser={username:username,password:password};
    
    window.console.log(newUser);
    
    
    //recieve JWT token 
    fetch('http://127.0.0.1:8000/token-auth/', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newUser)
     
    })
    
    .then(res => res.json())
    
      .then(json => {
        localStorage.setItem('token', json.token);
        window.console.log(json.token);
        
        this.props.setState({
          logged_in: true,
          
        });
      })
       
};