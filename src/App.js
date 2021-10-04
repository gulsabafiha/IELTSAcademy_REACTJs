import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import About from './components/About/About';
import Service from './components/Service/Service';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu></Menu>
        <Switch>
            <Route exact path='/'>
              <Home></Home>
          </Route>
            <Route path='/home'>
              <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/service'>
           <Service></Service>
          </Route>
          <Route path='/contact'>
           <Contact></Contact>
          </Route>
          <Route path='*'>
          <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
        </BrowserRouter>
     
    </div>
  );
}

export default App;
