import React from "react";
import { Switch,Route } from "react-router-dom";
import { Container } from "reactstrap";
import Dashboard from "./Dashboard";



function App() {
  return (
    <div >
       <Container>
         
         <Switch>
           <Route path="/" exact component={Dashboard}/>
         

         </Switch>
        
       </Container>
    </div>
  );
}

export default App;