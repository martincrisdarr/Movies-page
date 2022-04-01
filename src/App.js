
import Navbar from "./components/Navbar";
import './styles/imports.scss'
import MainPage from "./components/main-page/MainPage";
import Premium from "./components/form/Premium";
import Login from "./components/form/Login";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Register from "./components/form/Register";
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>

        <Route path="/login" element = {<Login />}></Route>
        <Route path="/registro" element= {<Register/>}></Route>
        <Route path="/premium" element = {<Premium />}></Route>
        <Route path="/" element= { <MainPage />}></Route>
        
        
        
      </Routes>
      
    </BrowserRouter>
    </>
  );
}

export default App;
