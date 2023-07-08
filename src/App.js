import { Route, Routes } from "react-router-dom"
import { lazy , Suspense } from "react";
import Loader from "./components/Loader/index.js";

const AddContent = lazy(() => import ("./components/AddContent/index.js"));
const Blogpage = lazy(() => import ("./components/Blogpage/index.js"));
const ErrorPage = lazy(() => import ("./components/ErrorPage/index.js"));
const Home = lazy(() => import ("./components/HomePage/index.js"));
const ProductListing = lazy(() => import ("./components/ProductListing/index.js"));

export default function App() {
  return (
    <Suspense fallback={<Loader/>}>

    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/productListing" exact element={<ProductListing/>}/>
      <Route path="/blogpage" exact element={<Blogpage/>}/>
      <Route path="/AddContent" exact element={<AddContent/>}/>
      <Route path="*"  element={<ErrorPage/>}/>
    </Routes>
    </Suspense>
  )
}