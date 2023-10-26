import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Component/MenuComponent';
import { useState } from "react";
import { DISHES } from './shared/dishes';
import Main from './Component/MainComponent';
import { BrowserRouter } from 'react-router-dom';


function App() {
  const [dishes] = useState(DISHES);

  return (
    <div className='AppQuang'>
      <Menu dishes={dishes} />
    </div>
  );
}


function MainComponent() {
  return (
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
  );
}
export default MainComponent;
