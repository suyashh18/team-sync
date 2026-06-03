import Attendance from "../../features/employee module/Attendance/Attendance";
import MyTask from "../../features/employee module/MyTask/MyTask";
import Profile from "../../features/employee module/profile/profile";

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