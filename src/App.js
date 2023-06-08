import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import About from './pages/About';
import HomePage from './pages/Homepage';
// import ProductsPage from './pages/Products';
import RootLayout from './pages/Root.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index:true, element: <HomePage /> },
      {path:"/about",element:<About></About>}
    ]
  }
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;