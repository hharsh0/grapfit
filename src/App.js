import './App.css';
import { Switch, Route } from "react-router-dom"
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Page1 from './pages/Page1';


function App() {
  return (
    <div class="bg-gray-900 lg:w-4/5 mx-auto">
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/apple-stats">
          <Page1 />
        </Route>
        {/* <Route path="/second">
          <Page2 />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
