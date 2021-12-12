import Home from './pages/home';
import Navbar from './components/navbar';
import Cart from './components/cart';
import CartSidebar from './cartSideBar';
import Header from './components/header';
// import { Route, Switch} from 'react-router-dom'

import './App.css';

function App() {
  return(
  <div className="App">
    <Header />
    <div className='container-fluid'>
          <div className='row'>
          <div className='col-3'>
            <Navbar />
          </div>
          <div className='col-6'>
            <Home />
          </div>
          <div className='col-3'>
            <CartSidebar />
          </div>
        </div>
        
    </div>
  </div>
  );
}

export default App;
