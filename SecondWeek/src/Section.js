import React from "react";
import { Route } from "react-router";
import Home from "./Home";
import About from "./About";
import FormDemo2 from "./FormDemo2";
import App from "./App";
import Shop from "./Shop";
import CategoryList from "./CategoryList";
import Details from "./Details";
import Checkbox from "./Checkbox";
import ProductList from "./ProductList";
import CartList from "./CartList";
export class Section extends React.Component {
  render() {
    return (
      <div>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/ecommerce" component={Home}></Route>
            <Route exact path="/form2" component={FormDemo2} />
            <Route exact path="/shop" component={App} />
            <Route exact path="/check" component={Checkbox} />
            <Route exact path="/stories" component={Shop} />
            <Route exact path="/category" component={CategoryList} />
            <Route exact path="/stories" component={Shop} />
            <Route exact path="/about" component={About} />
            <Route exact path="/product" component={ProductList} />
            <Route exact path="/product/:id" component={Details} />
            <Route exact path="/cart" component={CartList} />
      </div>
    );
  }
}

export default Section;
