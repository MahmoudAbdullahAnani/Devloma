import './App.css';
import Home from './Pages/Home/Home';
import { Routes, Route } from "react-router-dom";
import AboutUs from './Pages/AboutUs/AboutUs';
import Navbar from "./Layout/Navbar/Navbar";
import OurWork from './Pages/OurWork/OurWork';
import Connect from './Pages/Connect/Connect';
import CompanyProfile from './Pages/CompanyProfile/CompanyProfile';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={
      <>
        <Navbar Connect="nav-link  font-bold text-white w-fit m-auto" home="nav-link px-4 active rounded-pill font-bold text-white w-fit m-auto " aboutUs="w-fit m-auto nav-link text-white  font-bold " ourWork="w-fit m-auto nav-link text-white  font-bold " CompanyProfile="nav-link text-white font-bold "/>
        <Home/>
      </>
      }/>
      <Route path='/home' element={
      <>
        <Navbar Connect="nav-link  font-bold text-white w-fit m-auto" home="nav-link px-4  active rounded-pill font-bold text-white w-fit m-auto " aboutUs="nav-link text-white  font-bold w-fit m-auto" ourWork="nav-link text-white w-fit m-auto font-bold " CompanyProfile="w-fit m-auto nav-link text-white font-bold "/>
        <Home/>
      </>
      }/>
      <Route path='/aboutUs' element={
      <>
        <Navbar Connect="nav-link  font-bold text-white w-fit m-auto" home="nav-link  font-bold text-white w-fit m-auto " aboutUs="w-fit m-auto nav-link rounded-pill active px-4  text-white  font-bold " ourWork="w-fit m-auto nav-link text-white  font-bold " CompanyProfile="nav-link text-white font-bold "/>
        <AboutUs/>
      </>
      }/>
      <Route path='/CompanyProfile' element={
      <>
        <Navbar Connect="nav-link  font-bold text-white w-fit m-auto" home="nav-link  font-bold text-white w-fit m-auto " aboutUs="nav-link  text-white  font-bold w-fit m-auto" ourWork="nav-link text-white  font-bold w-fit m-auto" CompanyProfile="nav-link text-white font-bold rounded-pill px-4  active w-fit m-auto"/>
        <CompanyProfile/>
      </>
      }/>
      <Route path='/ourWork' element={
      <>
        <Navbar Connect="nav-link  font-bold text-white w-fit m-auto" home="nav-link  font-bold text-white w-fit m-auto" aboutUs="w-fit m-auto nav-link  text-white  font-bold " ourWork="w-fit m-auto active px-4  rounded-pill nav-link text-white  font-bold " CompanyProfile="w-fit m-auto nav-link text-white font-bold "/>
        <OurWork/>
      </>
      }/>
      <Route path='/Connect' element={
      <>
        <Navbar Connect="nav-link active px-4  rounded-pill font-bold text-white w-fit m-auto"  home="nav-link  font-bold text-white w-fit m-auto" aboutUs="w-fit m-auto nav-link  text-white  font-bold " ourWork="w-fit m-auto  nav-link text-white  font-bold " CompanyProfile="w-fit m-auto nav-link text-white font-bold "/>
        <Connect/>
      </>
      }/>
    </Routes>
    </>
  );
}

export default App;
