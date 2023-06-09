
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
import Messages from './pages/Messages';

import User from './pages/User';
import Explore from './pages/Explore';



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
},
{
  path: '/explore',
  element: <Explore />
},

{
  path: '/messages',
  element: <Messages />
},
{
  path: '/user',
  element: <User />
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
