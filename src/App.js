import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Blogs from './components/Blogs/Blogs';
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

          <Route exact path='/resume'>
            <Resume></Resume>
          </Route>
          <Route exact path='/blogs'>
            <Blogs></Blogs>
          </Route>
          <Route exact path='/contact'>
            <Contact></Contact>
          </Route>

        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
