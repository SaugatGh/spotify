import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Playlist from "./pages/playlist/Playlist";
import Signup from "./pages/signup/Signup";
import Search from "./pages/search/Search";

import "./app.css";
import Libary from "./pages/libary/Libary";
import Recentplayed from "./pages/ShowAll/RecentPlayed.jsx";
import LikedSongs from "./pages/likedSongs/LikedSongs";
import CreatePlaylist from "./pages/CreatePlaylist/CreatePlaylist";
import Navbar from "./components/navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },

      {
        path: "/libary",
        element: <Libary />,
      },
      {
        path: "/likedSongs",
        element: <LikedSongs />,
      },
      {
        path: "/createPlaylist",
        element: <CreatePlaylist />,
      },
      {
        path: "/playlist/:id",
        element: <Playlist />,
      },
      {
        path: "/showAll/recent/",
        element: <Recentplayed />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
