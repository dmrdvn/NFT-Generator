import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BlogDetails from "./components/Pages/BlogDetails";
import Home from "./components/Pages/Home";
import Application from "./components/Pages/Application";
import Spacing from "./components/Spacing";
function App() {
  return (
    <>
      <Header/>
      <Spacing lg='80' md='80'/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/app" element={<Application/>}/>
        {/* <Route path="/home3" element={<Home3/>}/>  */}
        <Route path="/blog/:id" element={<BlogDetails/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
