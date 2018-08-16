'use strict'

import React from 'react';

class fetche extends Component {
  state = {users: []}
  
  componentDidMount() {
    fetch('/beenseen', { mode: 'cors' })
    .then(res => res.json())
    .then(users => this.setState({ users }));
  }
  render(){
    return(
<div>
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }
};

export default fetche;