import { Outlet } from "react-router-dom"
import Header from "./component/Header"

function App() {
  return(
  <>
    <Header/>
      <div className="h-full w-full">
         <Outlet/>
      </div>
  </>
  )
}

export default App
