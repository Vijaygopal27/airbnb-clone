import React from 'react';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/search">
          <Search/>
        </Route>
      </Switch>
    </Router>
      <Footer/>
    </div>
  )
}

export default App
