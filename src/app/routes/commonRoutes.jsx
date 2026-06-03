
import Chat from "../../features/chats/Chat";
import Home from "../../features/dashboard/ui/pages/Home";
import Setting from "../../features/settings/Setting";

export let commonRoutes = [
  {
    path: "",
    element:<Home/>
  },
  {
    path: "chat",
    element: <Chat />,
  },
  {
    path: "setting",
    element: <Setting />,
  },
];