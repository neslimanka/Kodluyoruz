import React from "react";
import { Switch,Route } from "react-router-dom";
import { Container } from "reactstrap";
import Dashboard from "./Dashboard";
import NewsDetail from "../newsPage/NewsDetail"



function App() {
  return (
    <div >
       <Container>
         
         <Switch>
           <Route path="/" exact component={Dashboard}/>
           <Route path="/product" exact component={Dashboard}/>
          
           <Route path="/detail/:newsId"  component={NewsDetail}/>
           
         

         </Switch>
        
       </Container>
    </div>
  );
}

export default App;