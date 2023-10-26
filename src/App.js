import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Component/MenuComponent';
import { useState } from "react";
import { DISHES } from './shared/dishes';
import Main from './Component/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';


const store = ConfigureStore()

function MainComponent() {
  return (
    <Provider store={store} >

      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
}
export default MainComponent;
