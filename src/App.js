import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import ProductDetail from './components/Product/ProductDetail';
import Store from './pages/Store';
import About from './pages/About';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';
import {Switch, Route} from "react-router-dom"
import './style.css'
import Auth from './pages/Auth';
//import Auth from './pages/Auth';

function App() {
  return (
    <div>
        <Auth/>

        <Header />
        
        <Switch>
  
          <Route exact path="/">
            <Store />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/wishlist">
            <Wishlist />
          </Route>

          <Route path="/product/:productId">
            <ProductDetail />
          </Route>
        </Switch>
        
        <Footer />
    </div>
  );
}

export default App;
