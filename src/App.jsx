import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout.jsx";
import Home from "./pages/Home.jsx";
import Game from "./pages/Game.jsx";
import Browse from "./pages/Browse.jsx";
import SignIn from "./pages/SignIn.jsx";
import Account from "./pages/Account.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Cart from "./pages/Cart.jsx";
import Payment from "./pages/Payment.jsx";
import News from "./pages/News.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/games/:title",
        element: <Game />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/news",
        element: <News />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
