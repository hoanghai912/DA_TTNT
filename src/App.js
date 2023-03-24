import './App.css';
// import { Route, Routes, Router} from "react-router-dom";
import Home from './components/Screens/Home';
// import Welcome from './components/Welcome/Welcome'
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </div>
      
    
  );
}

export default App;
