import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

//IMPORT
import Home from './views/Home';

const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/about" exact element={<h2>this is about</h2>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
