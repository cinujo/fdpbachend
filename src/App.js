import logo from './logo.svg';
import './App.css';
import View from './components/View';
import Home from './components/Home';
import AddEmployee from './components/AddEmployee';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <h1>cinu joseph</h1> */}
      {/* <View/> */}
      {/* <Home/> */}
      {/* <AddEmployee/> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<AddEmployee/>}/>
        <Route path='/view' element={<View/>}/>
      </Routes>
    </div>
  );
}

export default App;
