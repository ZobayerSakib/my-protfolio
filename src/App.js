import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Blogs from './components/Blogs/Blogs';
import Product1 from './components/Product1/Product1';
import Product2 from './components/Product2/Product2';
import Product3 from './components/Product3/Product3';
import Product6 from './components/Product6/Product6';
import Product4 from './components/Product4/Product4';
import Product5 from './components/Product5/Product5';
import About from './components/About/About';
function App() {
  return (
    <div>

      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route exact path='/resume'>
            <Resume></Resume>
          </Route>
          <Route exact path='/blogs'>
            <Blogs></Blogs>
          </Route>
          <Route exact path='/contact'>
            <Contact></Contact>
          </Route>
          <Route exact path='/product1'>
            <Product1></Product1>
          </Route>
          <Route exact path='/product2'>
            <Product2></Product2>
          </Route>
          <Route exact path='/product3'>
            <Product3></Product3>
          </Route>
          <Route exact path='/product4'>
            <Product4></Product4>
          </Route>
          <Route exact path='/product5'>
            <Product5></Product5>
          </Route>
          <Route exact path='/product6'>
            <Product6></Product6>
          </Route>

        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
