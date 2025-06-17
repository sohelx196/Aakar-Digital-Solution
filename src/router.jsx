import { createBrowserRouter, createRoutesStub } from "react-router-dom";
import App from "./App";
import Homepage from "./component/Homepage";
import About from "./component/About";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                index:true,
                element:<Homepage/>
            },
            {
                path:"about",   
                element:<About/>
            },
        ]
    }
])

export default router;
