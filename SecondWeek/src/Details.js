import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/Details.css";
import alertify from "alertifyjs";


export class Details extends Component {
 
  state = {  products: [] };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    let url = "http://localhost:3000/products";
    if (this.props.match.params.id) {
        fetch(url)
        .then((response) => response.json())
        .then((data) => this.setState({ products: data }));
    }
   
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
      addedItem.price = addedItem.price + addedItem.price;
    } else {
      newCart.push({ product: product, quantity: 1, price: product.price });
    }

    this.setState({ cart: newCart });
    alertify.success(product.title + " added to cart!");
  };


  render() {
  
    return (
     <>
        {this.state.products.map((item) => (
          <div className="details" key={item.id}>
            <img src={item.image} alt="" />
            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                <span>${item.price}</span>
              </div>
              
              <p>{item.description}</p>
              <p>{item.description}</p>
              <Link
                to="/cart"
                className="cart"
                onClick={() => this.addToCart(item)}
              >
                Add to cart
              </Link>
                
            </div>
          </div>
        ))}
    </>
    );
  }
}

export default Details;
