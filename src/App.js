// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import Store from './store/store';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (

    <Provider store={Store}>
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/Cart' element={<Cart/>}></Route>
    </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
