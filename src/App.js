import './App.css';
import Nav from './components/Nav.js';
import Welcome from './components/Welcome.js';
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
