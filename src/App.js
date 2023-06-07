import {createBrowserRouter,RouterProvider} from 'react-router-dom';

import HomePage from './pages/Homepage';
// import ProductsPage from './pages/Products';
import RootLayout from './pages/Root.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index:true, element: <HomePage /> }
      
    ],
  }
]);

// const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;