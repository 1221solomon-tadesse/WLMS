import {BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import  Books from './components/Books';
import AddBooks from './components/AddBooks';
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/Home' Component={Home}/>
        <Route exact path='/Books' Component={Books}/>     
          <Route exact path='/AddBooks' Component={AddBooks}/>
          </Routes>
          <Footer/>
    </BrowserRouter>
  );
}


export default App;