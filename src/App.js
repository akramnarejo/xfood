import "./App.css";
import Layout from "./components/layout";
import About from "./pages/about";
import Menu from "./pages/menu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RandomMeal from "./pages/randomMeal";
import Favourites from "./pages/favourites";
import Category from "./pages/category";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Menu />,
        },
        {
          path: "/menu",
          element: <Menu />,
        },
        {
          path: '/category/:category',
          element: <Category />,
        },
        {
          path: '/favourites',
          element: <Favourites />,
        },
        {
          path: "/random",
          element: <RandomMeal />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
