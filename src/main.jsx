import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root, { loader as rootLoader } from './routes/Root.jsx'
import './index.css'
import ErrorPage from './ErrorPage.jsx';
import Profile, { loader as profileLoader} from './routes/Profile.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage />,
        loader: rootLoader,
        children: [
            {
                path: "profile/:position",
                element: <Profile />,
                loader: profileLoader,
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
