import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout.jsx";
import Home from "./pages/Home.jsx";
import Game from "./pages/Game.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/game",
        element: <Game />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
