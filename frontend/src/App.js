//import logo from './logo.svg';
/*import './App.css';*/
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Header from './components/layout/Header'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Contacto from './pages/Contacto'
import Politicas from './pages/Politicas'
import Articulos from './pages/Articulos'
function App() {
  return (
    <div className="App">
     <Router>
       <Header></Header>
       <Nav />
       <Routes>
         <Route path="/" exact component = {Home}/>
         <Route path="/articulos" exact component = {Articulos}/>
         <Route path="/politicas" exact component = {Politicas}/>
         <Route path="/contacto" exact component = {Contacto}/>
       </Routes> 
       < Home /> 
       <Footer />
     </Router>
    </div>
  );
}

export default App;
