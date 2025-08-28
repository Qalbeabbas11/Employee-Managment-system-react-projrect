import React, { useContext } from "react";
import Header from "../Sections/Header";
import CreateTask from "../Sections/CreateTask";
import TaskScroolBar from "../Sections/TaskScroolBar";
import { Authcontext } from "../../Context/AuthProvider";

const AdminDashboard = ({ handleLogout }) => {
  const AuthData = useContext(Authcontext);
  const admin = AuthData?.admin?.[0] || { name: "Admin" };

  return (
    <div className="h-full w-full bg-zinc-800 p-10 text-white">
      <Header data={admin} handleLogout={handleLogout} />
      <CreateTask />
      
    </div>
  );
};

export default AdminDashboard;
