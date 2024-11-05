import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
  
} from "react-router-dom";
import Home from './containers/Home.js'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact={true} path='/' Component={Home}/>
      </Routes>
        
        
    </BrowserRouter>
  )

}

export default App;
