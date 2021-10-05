import React, { Component } from "react";
import alertify from "alertifyjs";
import "./css/Details.css";
import "./css/Cart.css";

export class CartList extends Component {

  state = { currentCategory: "", products: [], cart: [] };

  componentDidMount() {
    this.getProducts();
  }

 

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
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
  // reduction = (id) => {
  //   const { cart } = this.state;
  //   cart.forEach((item) => {
  //     if (item._id === id) {
  //       item.count === 1 ? (item.count = 1) : (item.count -= 1);
  //     }
  //   });
  //   this.setState({ cart: cart });
  //   this.getTotal();
  // };
  // increase = (id) => {
  //   const { cart } = this.state;
  //   cart.forEach((item) => {
  //     if (item._id === id) {
  //       item.count += 1;
  //     }
  //   });
  //   this.setState({ cart: cart });
  //   this.getTotal();
  // };

  // getTotal = () => {
  //   const { cart } = this.state;
  //   const res = cart.reduce((prev, item) => {
  //     return prev + item.price * item.count;
  //   }, 0);
  //   this.setState({ total: res });
  // };
  render() {
    
    if (this.state.cart.length === 0) {
      return <h2 style={{ textAlign: "center" }}>Nothings Product</h2>;
    } else {
      return (
        <>
          {this.state.cart.map((item) => (
            <div className="details cart" key={item.id}>
              <img src={item.image} alt="" />
              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span>${item.price * item.count}</span>
                </div>
               
                <p>{item.description}</p>
                <p>{item.description}</p>
                {/* <div className="amount">
                  <button className="count" onClick={() => this.reduction(item.id)}>
                    -
                  </button>
                  <span>{item.count}</span>
                  <button className="count" onClick={() => this.increase(item.id)}>
                    +
                  </button>
                </div> */}
              </div>
              {/* <div className="delete" onClick={() => this.removeProduct(item.id)}>
                X
              </div> */}
            </div>
          ))}
          {/* <div className="total">
            <Link to="/payment">Payment</Link>
            <h3>Total: $Total</h3>
          </div> */}
        </>
      );
    }
  }
}

export default CartList;
