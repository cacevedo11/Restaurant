import './App.css';
import Nav from './components/Nav.js';
import Welcome from './components/Welcome.js';
import Menu from './components/Menu';
import {
  createBrowserRouter,
  RouterProvider, Outlet,
} from "react-router-dom";

function App() {

  const Layout = () => {
    return (
      <>
        <Nav />
        <Outlet />
      </>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Welcome />
        },
        {
          path: "/menu",
          element: <Menu />
        },

      ]
    }
  ]);

  return (
    <div className='max-h-screen  box-border'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
