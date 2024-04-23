import { Route, Routes } from "react-router-dom"
//import components
import  Header  from "./components/Header"
import  Footer  from "./components/Footer"
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";

//Pages import
import  AboutUs  from "./pages/AboutUs"
import  FindDocs  from "./pages/FindDocs"
import  Home  from "./pages/Home"
import DocProfile from "./pages/DocProfile";

function App() {
  return (
    <>
    <LazyMotion features={domAnimation}>
    <Header/>
    <AnimatePresence>
    <Routes>
      <Route  path="/"  element={<Home />} />
      <Route key={2} path="/FindDoctors" element={<FindDocs />} />
      <Route key={3} path="/AboutUs" element={<AboutUs />} />
      {/* Added doc profile can be added more! */}
      <Route key={4} path="/docs/:docId" element={<DocProfile/> } />
    </Routes>
    </AnimatePresence>
    <Footer/>
    </LazyMotion>
    </>
  )
}

export default App
