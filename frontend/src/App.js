import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Books from './components/Books';
import AddBooks from './components/AddBooks';
import Footer from './components/Footer';
import Update from './components/Update';
import SearchResults from './components/SearchResult';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
function App() {
  const users={
    registerd:'registered',
    public :'user',
    admin:'admin'
  }
  const currrent_user=users.admin
  return (
   
    <BrowserRouter>
      <Navbar currrent_user={currrent_user}/>
      <Routes>
  <Route path='/Login' element={<Login/>}/>
  <Route path='/Signup'element={<Signup/>}/>
  <Route path="/" element={<Home />} />
  <Route path="/Books" element={<Books currrent_user={currrent_user}/>} />
  <Route path="/AddBooks" element={<AddBooks currrent_user={currrent_user}/>} />
  <Route path="/search" element={<SearchResults />} />
  <Route path="/update" element={<Update />} />
  <Route path="/update/:id" element={<Update />} />
</Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;