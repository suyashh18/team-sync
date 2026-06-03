import Department from "../../features/adminModule/departments/Department";
import Document from "../../features/adminModule/documents/Document";
import AddEmployee from "../../features/adminModule/employees/ui/pages/AddEmployee";
import Employee from "../../features/adminModule/employees/ui/pages/Employee";
import Task from "../../features/adminModule/tasks/Task";


export let adminRoutes = [
  {
    path: "/home/employee",
    element: <Employee />,
  },
  {
    path: "/home/add-employee",
    element: <AddEmployee />,
  },
  {
    path: "/home/task",
    element: <Task />,
  },
  {
    path: "/home/department",
    element: <Department />,
  },
  {
    path: "/home/document",
    element: <Document />,
  },
];