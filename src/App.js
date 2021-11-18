import './App.css';
import { Routes, Route, Link} from "react-router-dom";

//VIEWS
import Home from './views/Home';

const App = () => {
  return (
    <Routes>
    <div className="App">
      <Route path="/details" strict element={<Home/>} />
    </div>
    </Routes>
  );
}

export default App;
