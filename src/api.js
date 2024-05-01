import './App.css';
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
          <h2>{user.username}</h2>
          <p>Email: {user.email}</p>
          <p>Address: {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
          <p>Company: {user.company.name}</p>
        </div>
      ))}
      </div>
  );
}

export default App;
