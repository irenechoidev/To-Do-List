import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { isAuthenticated } from './utils/isAuthenticated';
import { AuthenticatedRoute, UnauthenticatedRoute } from './utils/protectedRoutes';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Create from './pages/Create';
import Details from './pages/Details';
import DeadPage from './pages/DeadPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Update from './pages/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path = '/' element = {isAuthenticated() ? <Home />: <Login />} />
          {AuthenticatedRoute('/create', <Create />)}
          {AuthenticatedRoute('/update/:id', <Update />)}
          {AuthenticatedRoute('/todo/:id', <Details />)}
          {UnauthenticatedRoute('/register', <Register />)}
          <Route path = '*' element = {<DeadPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
