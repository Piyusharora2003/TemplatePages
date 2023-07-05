import { Route, Routes } from "react-router-dom"
import PageTemp1 from "./components/ProductListing/index.js"
import AddContent from "./components/AddContent/AddContent.js"
import Blogpage from "./components/Blogpage/Blogpage.js"
import Home from "./components/HomePage/Home.js"

export default function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/productListing" exact element={<PageTemp1/>}/>
      <Route path="/blogpage" exact element={<Blogpage/>}/>
      <Route path="/Add" exact element={<AddContent/>}/>
    </Routes>
  )
}