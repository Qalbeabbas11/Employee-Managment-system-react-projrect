import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import { Authcontext } from "./Context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const AuthData = useContext(Authcontext);

  // Jab page reload ho to localStorage check karo
  useEffect(() => {
    const savedUser = localStorage.getItem("LoggedInUser");
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser.role); // "admin" or "employee"
      if (parsedUser.role === "employee") {
        setLoggedInUserData(parsedUser);
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    if (
      AuthData &&
      AuthData.admin.find((e) => e.email === email && e.password === password)
    ) {
      setUser("admin");
      localStorage.setItem("LoggedInUser", JSON.stringify({ role: "admin" }));
    } else if (AuthData) {
      const employee = AuthData.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "LoggedInUser",
          JSON.stringify({ role: "employee", ...employee })
        );
      } else {
        alert("Wrong Details");
      }
    } else {
      alert("Wrong Details");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("LoggedInUser");
    setUser(null);
    setLoggedInUserData(null);
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard handleLogout={handleLogout} />
      ) : (
        user === "employee" ? (
          <EmployeeDashboard data={loggedInUserData} handleLogout={handleLogout} />
        ) : null
      )}
    </>
  );
};

export default App;
