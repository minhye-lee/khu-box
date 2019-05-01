import React, { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import Auth from './pages/Auth'


class App extends Component {
  render = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Route exact path="/" component={Home}/>
                <Route path="/auth" component={Auth}/>
            </div>
        </BrowserRouter>
    )
  }

}

export default App;
