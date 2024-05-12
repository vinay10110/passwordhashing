import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import {Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
   
   <Routes>
    <Route path='/login' element={<Login />} />
   <Route path='/register' element={<Register />} />
   <Route path='/dashboard' element={<Dashboard />} />
   </Routes>
    
    </div>
  );
}
export default App;
