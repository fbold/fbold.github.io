import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./views/Home"
import ExpandedInfo from "./views/ExpandedInfo"
import routes from "./routes"
import text from "./text"

const App = () => {
  return (
    <Router>
      <Switch>
        {text.projects.map((project) => (
          <Route key={project.path} path={"/" + project.path}>
            <ExpandedInfo extendedInfoObject={project}></ExpandedInfo>
          </Route>
        ))}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
