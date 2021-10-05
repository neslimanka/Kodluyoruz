import React from "react";
import { Route } from "react-router";
import Home from "./Home";
import About from "./About";
import FormDemo2 from "./FormDemo2";
import App from "./App";
import Shop from "./Shop";
import CategoryList from "./CategoryList";
import Stories from "./Stories";

export class Section extends React.Component {
  render() {
    return (
      <div>
          <Route exact path="/" component={Home}></Route>
            <Route exact path="/ecommerce" component={Home}></Route>
            <Route exact path="/form2" component={FormDemo2} />
            <Route exact path="/shop" component={App} />
           
            <Route exact path="/deneme" component={Shop} />
            <Route exact path="/category" component={CategoryList} />
            <Route exact path="/stories" component={Stories} />
            <Route exact path="/about" component={About} />
      </div>
    );
  }
}

export default Section;
