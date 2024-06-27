import './App.css';
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Taskdetails from './components/Taskdetails';
import Add from './components/Add';
import Login from './components/Login';
import Protect from './components/Protect';
import Signup from './components/SignUp';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/signin' element={<Login/>}/>

        <Route path='/home' element={<Protect Child={Home}/>}/>

        <Route path='/details/:tid' element={<Protect Child={Taskdetails}/>}/>

        <Route path='/add' element={<Add/>}/>

        <Route path='/*' element={</>}/>

        

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
