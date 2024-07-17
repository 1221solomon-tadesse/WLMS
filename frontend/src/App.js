import {BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import  Books from './components/Books'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/Home' Component={Home}/>
        <Route exact path='/Books' Component={Books}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;