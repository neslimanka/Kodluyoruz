import React, { Component } from "react";
import { Route,Switch  } from "react-router";
import { Container} from "reactstrap";


import FormDemo1 from "./FormDemo1";
import FormDemo2 from "./FormDemo2";
import App from "./App";
import Home from "./Home";
import CartList from "./CartList";




export default class HomePage extends Component {
  
  render() {
    return (
      <div>
        
          <Container>
            

            <Switch>
              
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/ecommerce" component={Home}></Route>
                <Route exact path="/form1" component={FormDemo1}></Route>
                <Route exact path="/form2" component={FormDemo2} />
                <Route exact path="/shop" component={App} />
                <Route exact path="/cartList" component={CartList} />
                
                
              
               
              </Switch>
          </Container>
        
      </div>
    );
  }
}
