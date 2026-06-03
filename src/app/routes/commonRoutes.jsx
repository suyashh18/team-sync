import { Home } from "lucide-react";
import Chat from "../../features/chats/Chat";
import Setting from "../../features/settings/Setting";

export let commonRoutes = [
  {
    path: "",
    element: <Home />,
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