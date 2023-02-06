
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navi from './component/Navi';
import About from './component/About';
import Maincomp from './component/Maincomp';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navi></Navi>
        <Routes>
          <Route path='/about' element={<h2>영생군주천상대제불신지옥</h2>}></Route>
          <Route path='/' element={<Maincomp></Maincomp>}></Route>
        </Routes>
      
      
    </div>
  );
}

export default App;
