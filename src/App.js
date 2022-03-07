import Header from "./components/Header";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Users from "./components/Users";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const usersFromServer = await fetchUsers();
      setUsers(usersFromServer);
    };

    getUsers();
  }, []);
  // Fetch Users
  const fetchUsers = async () => {
    const res = await fetch("http://localhost:3000/users", { mode: "cors" });
    const data = await res.json();

    return data;
  };

  // Fetch User
  const fetchUser = async (id) => {
    const res = await fetch(`http://localhost:5000/users/${id}`);
    const data = await res.json();

    return data;
  };

  // Add User
  const addUser = async (user) => {
    const res = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  return (
    <Router>
      <div className='container'>
        <Header></Header>
        <Routes>
          <Route
            path='/'
            element={
              <>
                {users.length > 0 ? (
                  <Users users={users} />
                ) : (
                  "No Users To Show"
                )}
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
