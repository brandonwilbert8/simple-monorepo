import React, { useState, useEffect } from 'react';

function App() {
  const [backendData, setBackendData] = useState<any | undefined>();

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setBackendData(data))
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {backendData?.users.map((user: any) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
