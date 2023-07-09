import './App.css'
import { useRoutes } from 'react-router-dom'
import Layouts from './pages/Layouts'
import Home from './pages/Home'
import DiaryPost from './pages/DiaryPost'

function App() {
    const routing = useRoutes([
        {
            path: '/',
            element: <Layouts />,
            children: [
                { path: '/', element: <Home /> },
                { path: '/diary/:id', element: <DiaryPost /> }
            ]
        }
    ])
    return routing
}

export default App
