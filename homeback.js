import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(response.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  const addUser = async (newUser) => {
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/users", newUser);
      setUser(response.data);
      fetchUsers();
    } catch (error) {
      setError(error);
    }
  };

  const updateUser = async (updatedUser) => {
    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${updatedUser.id}`, updatedUser);
      setUser(response.data);
      fetchUsers();
    } catch (error) {
      setError(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      fetchUsers();
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      <h1>Users</h1>
      <button onClick={() => addUser({ name: "John Doe", email: "johndoe@example.com" })}>Add User</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => updateUser({...user, name: `${user.name} Updated` })}>Update</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {error && <p>Error: {error.message}</p>}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default App;