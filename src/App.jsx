import { Outlet } from "react-router-dom"
import Header from "./component/Header"
import Footer from "./component/Footer"
import ScrollToTop from "./component/ScrollToTop"
function App() {
  return(
  <>
  <ScrollToTop />
    <Header/>
      <div className="h-full w-full">
         <Outlet/>
      </div>
      <Footer/>
  </>
  )
}

export default App
