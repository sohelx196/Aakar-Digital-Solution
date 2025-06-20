import { createBrowserRouter, createRoutesStub } from "react-router-dom";
import App from "./App";
import Homepage from "./component/Homepage";
import AakarPrakashan from "./component/AakarPrakashan";
import Contact from "./component/Contact";
import AakarDigitalProduct from "./component/AakarDigitalProduct";
import AakarWebAndSoftware from "./component/AakarWeb&Software";
import AakarGraphics from "./component/AakarGraphics";

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
                path:"aakarPrakashan",
                element:<AakarPrakashan/>
            },

            {
                path:"aakarDigitalProduct",
                element:<AakarDigitalProduct/>
            },

            {
                path:"aakarWebAndSoftware",
                element:<AakarWebAndSoftware/>
            },

            {
                path:"aakarGraphics",
                element:<AakarGraphics/>
            },

            {
                path:"contact",   
                element:<Contact/>
            },
        
        
        ]
    }
])

export default router;
