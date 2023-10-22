import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Create from './pages/Create';
import Details from './pages/Details';
import DeadPage from './pages/DeadPage';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/create' element = {<Create />} />
          <Route path = '/todo/:id' element = {<Details />} />
          <Route path = '/login' element = {<Login />} />
          <Route path = '*' element = {<DeadPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
