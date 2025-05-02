import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import PrivaateRoute from "./routes/PrivaateRoute";
import Dashboard from "./pages/Admin/Dashboard";
import ManageTasks from "./pages/Admin/ManageTasks";
import CreateTask from "./pages/Admin/CreateTask";
import ManageUser from "./pages/Admin/ManageUser";
import UserDashboard from "./pages/User/UserDashboard";
import MyTask from "./pages/User/MyTask";
import ViewTaskDetails from "./pages/User/ViewTaskDetails";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Admin routes */}
          <Route element={<PrivaateRoute allowedRoles={["admin"]} />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/tasks" element={<ManageTasks />} />
            <Route path="/admin/create-task" element={<CreateTask />} />
            <Route path="/admin/users" element={<ManageUser />} />
          </Route>

          {/* User routes */}

          {/* Admin routes */}
          <Route element={<PrivaateRoute allowedRoles={["admin"]} />}>
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/user/tasks" element={<MyTask />} />
            <Route
              path="/user/tasks-details/:id"
              element={<ViewTaskDetails />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
