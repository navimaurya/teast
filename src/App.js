import {
  Switch,
  Route,

} from "react-router-dom";
import Home from './pages/home';
import Navbar from './components/navbar';
import Cart from './components/cart';
import CartSidebar from './cartSideBar';
import Header from './components/header';


import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-3'>
              <Navbar />
            </div>
            <Route exact path='/' component={Home} />
            <Route path='/cart' component={Cart} />
          </div>

        </div>
      </Switch>
    </div>
  );
}

export default App;
