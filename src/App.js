import SignIn from "./SignIn";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import SignUp from "./SignUp";
import Home from "./Home";


function App(){
  
  return (
    <Router>
      <div className="App" style={{backgroundColor:'#F9F9FA'}}>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/signin">
              <SignIn/>
            </Route>
            <Route path="/signup">
              <SignUp/>
            </Route>
          </Switch>
      </div>
    </Router>
    
  );
}

export default App;
