
import './style.css'

import Home from './components/home/Home';
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider, 
} from 'react-router-dom';
import Notification from './pages/Notification';
import Main from './layouts/Main';
import Sidebar from './components/sidebar/Sidebar';
import Bookmark from './pages/Bookmark';




const router = createBrowserRouter([
{
  path: "/",
  element: <Home />

},
{
  path: '/notification',
  element: <Notification />
},
{
  path: '/bookmark',
  element: <Bookmark />
}
]

)

function App() {
  return (
    // <Home/>
    <RouterProvider router={router}>
      <Outlet />
    </RouterProvider>
    
  );
}

export default App;
