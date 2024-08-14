import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Books from './components/Books';
import AddBooks from './components/AddBooks';
import Footer from './components/Footer';
import Update from './components/Update';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import ProtectedRoutes from './components/ProtectedRoute'
import SearchResults from './components/SearchResult';
function App() {
  return (
   
    <BrowserRouter>
      <Navbar />
      <Routes>
  <Route path='/Login' element={<Login/>}/>
  <Route path='/Signup'element={<Signup/>}/>
  <Route path="/" element={<Home />} />
  <Route element ={<ProtectedRoutes allowedRoles={['admin', 'user']} />}>
  <Route path="/Books" element={<Books />} />
  <Route path="/AddBooks" element={<AddBooks />} />
  <Route path="/search" element={<SearchResults />} />
  <Route path="/update" element={<Update />} />
  <Route path="/update/:id" element={<Update />} />
  
  </Route>
 
</Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;