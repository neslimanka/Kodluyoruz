import React, { Component } from "react";

import { Route, Switch } from "react-router";
import { Container } from "reactstrap";

import FormDemo2 from "./FormDemo2";
import App from "./App";
import Home from "./Home";
import CategoryList from "./CategoryList";
import Stories from "./Stories";
import About from "./About";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Container>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/ecommerce" component={Home}></Route>
            <Route exact path="/form2" component={FormDemo2} />
            <Route exact path="/shop" component={App} />
           
           
            <Route exact path="/category" component={CategoryList} />
            <Route exact path="/stories" component={Stories} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Container>
</div>


    ) 
  }
}




