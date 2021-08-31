import React, {useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './views/Home';
import ExpandedInfo from './views/ExpandedInfo';
import routes from './routes';

// const TestHide = props => {
//   const handleClick = () => {
//     props.setInfoPanel(!props.infoPanel)
//   }

//   return (
//     props.infoPanel ?
//       <>
//         <div className="absolute transform transition -translate-x-full ease-in-out duration-700 z-50 bg-purple-even-darker">
//           {props.children}
//         </div>
//         <MoreInfo extendedInfoObject={props.extendedInfoObject} handleClick={handleClick}>
          
//         </MoreInfo>
//       </>
//       :
//       <>
//         <div className="absolute transform transition translate-x ease-in-out duration-700 z-50 bg-purple-even-darker">
//           {props.children}
//         </div>
//         <MoreInfo extendedInfoObject={props.extendedInfoObject} handleClick={handleClick}>
          
//         </MoreInfo>
//       </>
//   )
// }
// import React from "react";


const App = () => {
  const [infoPanel, setInfoPanel] = useState(false)
  const [currentExtendedInfoObject, setCurrentExtendedInfoObject] = useState("")

  // useEffect(() => {
  //   if(infoPanel) document.body.style.overflow = "hidden";
  //   else document.body.style.overflow = "";
  // }, [infoPanel])

  return (
    <Router>
      <Switch>
      {routes.map(route => (
          <Route path={route.path}>
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
