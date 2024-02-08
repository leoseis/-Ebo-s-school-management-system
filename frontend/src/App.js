import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Navigation />
    <Routes>
    <Route exact path="/" element={<Home/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
