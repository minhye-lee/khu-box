import React, { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import Auth from './pages/Auth'
import Personal from './pages/Personal'
import Share from './pages/Share'
import Trash from './pages/Trash'

class App extends Component {
  render = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Route exact path="/" component={Home}/>
                <Route path="/auth" component={Auth}/>
                <Route path="/personal" component={Personal}/>
                <Route path="/share" component={Share}/>
                <Route path="/trash" component={Trash}/>
            </div>
        </BrowserRouter>
    )
  }

}

export default App;
