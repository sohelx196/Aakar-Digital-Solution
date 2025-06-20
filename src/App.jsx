import { Outlet } from "react-router-dom"
import Header from "./component/Header"
import Footer from "./component/Footer"

function App() {
  return(
  <>
    <Header/>
      <div className="h-full w-full">
         <Outlet/>
      </div>
      <Footer/>
  </>
  )
}

export default App
