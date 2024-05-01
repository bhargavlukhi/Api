import './App.css';
import './api';
import React, { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className='userlist'>
      {users.map(user => (
        <div key={user.id}>
          
        <div class="episode__content">
            <div class="title">{user.username}</div><br></br>
        <div class="story">
            <p>Email: {user.email}</p>
            <p>Address: {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>Company: {user.company.name}, </p>
        </div>
        </div>
        </div>
      ))}
    </div>
  );
}

export default App;
