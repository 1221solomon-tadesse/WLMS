import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Books from './components/Books';
import AddBooks from './components/AddBooks';
import Footer from './components/Footer';
import Update from './components/Update';
import SearchResults from './components/SearchResult';
import Signup from './auth/Signup';
import Login from './auth/Login';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
   <Route path='/Login' element={<Login/>}/>
  <Route path ='/Signup'element={<Signup/>}/>
  <Route path="/Home" element={<Home />} />
  <Route path="/Books" element={<Books />} />
  <Route path="/AddBooks" element={<AddBooks />} />
  <Route path="/search" element={<SearchResults />} />
  <Route path="/update" element={<Update />} />
  <Route path="/update/:id" element={<Update />} />
</Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;