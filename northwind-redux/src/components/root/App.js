import React from "react";
import { Switch,Route } from "react-router-dom";
import { Container } from "reactstrap";
import CartDetail from "../cart/CartDetail";
import Navi from "../navi/Navi";
import AddOrUpdateProducts from "../products/AddOrUpdateProducts";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div >
       <Container>
         <Navi/>
         <Switch>
           <Route path="/" exact component={Dashboard}/>
           <Route path="/product" exact component={Dashboard}/>
           <Route path="/cart" exact component={CartDetail}/>
           <Route path="/saveproduct/:productId"  component={AddOrUpdateProducts}/>

         </Switch>
        
       </Container>
    </div>
  );
}

export default App;
