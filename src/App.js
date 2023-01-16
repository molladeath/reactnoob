
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
          <Route path='/about' element={<h2>회사소개컴포넌트노출하기</h2>}></Route>
          <Route path='/' element={<Maincomp></Maincomp>}></Route>
        </Routes>
      
      
    </div>
  );
}

export default App;
