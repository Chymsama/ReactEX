import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Component/MenuComponent';
import { useState } from "react";
import { DISHES } from './shared/dishes';
function App() {
  const [dishes] = useState(DISHES);

  return (
    <div className='AppQuang'>
      <Menu dishes={dishes} />
    </div>
  );
}

export default App;
