import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Create from './pages/Create';
import Details from './pages/Details';

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/create' element = {<Create />} />
          <Route path = '/todo/:id' element = {<Details />} />
          <Route path = '*' element = {<h1>DEAD PAGE</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
