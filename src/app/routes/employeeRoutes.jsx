import Attendance from "../../features/employeeModule/Attendance/Attendance.jsx";
import MyTask from "../../features/employeeModule/MyTask/MyTask.jsx";
import Profile from "../../features/employeeModule/profile/Profile.jsx";


export let employeeRoutes = [
  {
    path: "/home/myTask",
    element: <MyTask />,
  },

  {
    path: "/home/attendance",
    element: <Attendance />,
  },

  {
    path: "/home/profile",
    element: <Profile />,
  },
];