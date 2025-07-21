import { Outlet } from "react-router-dom"
import Header from "./component/Header"
import Footer from "./component/Footer"
import ScrollToTop from "./component/ScrollToTop"
import Popup from "./feature/PopUp"

function App() {

  return(
  <>
  <ScrollToTop />
  <Popup/>
    <Header/>
      <div className="overflow-x-hidden w-full">
         <Outlet/>
      </div>
      <Footer/>
  </>
  )
}

export default App
