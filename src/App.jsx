import './App.css'
import {useRoutes, Outlet} from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Settings from './components/Settings'
import Home from './components/Home'

function App() {
  const routes = useRoutes([
    {
      path:"/",
      element:<Dashboard/>,
      children:[
        {
          index:true,
          element: <Home/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/settings",
          element:<Settings/>
        }
      ]
    },
  ])
  
  return routes; 

}

export default App
