import React from 'react';
import './App.css';
import Blog from './Blog';
import Blog2 from './Blog2';
import Blog3 from './Blog3';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
   <Router>
    <div className="App">
       <Switch>

      <Route exact path ="/">
     <Blog/>
     </Route>

     <Route path = "/module2">
     <Blog2/>
     </Route>

     <Route path = "/module3">
     <Blog3/>
     </Route>

     </Switch>
    </div>
    </Router>
  );
}

export default App;
