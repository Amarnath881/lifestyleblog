import './App.css';
import Navbar  from './includes/navbar'
import Footer from './includes/footer'
import Home from './component/home'
import About from './component/about'
import Service from './component/service'
import Contact from './component/contact'
import Viewblog from './component/viewblog'



import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


// bootstrap link

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router className="App">
      <Navbar />

      <Switch>
        <Route path="/" exact>
          <Home name="programming " age="23"/>
        </Route>
         <Route path="/about">
           <About />
        </Route>
        <Route path="/service">
           <Service />
        </Route>
        <Route path="/contact">
           <Contact/>
        </Route>
        <Route path="/viewblog/:url" exact>
           <Viewblog/>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
