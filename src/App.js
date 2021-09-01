import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './views/Home';
import ExpandedInfo from './views/ExpandedInfo';
import routes from './routes';


const App = () => {
  return (
    <Router>
      <Switch>
      {routes.map(route => (
          <Route key={route.path} path={route.path}>
            <ExpandedInfo extendedInfoObject={route.textObject}></ExpandedInfo>
          </Route>
        ))}
        <Route path="/">
          <Home/>
        </Route>
        
        
      </Switch>
    </Router>
  )
}

export default App;
