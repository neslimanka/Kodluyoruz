import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators} from "redux"
import * as productsActions from "../../redux/actions/productsActions";
import { Table,Button } from 'reactstrap';
import * as cartActions from "../../redux/actions/cartActions";
import alertify from "alertifyjs"
import {Link} from "react-router-dom";


class ProductList extends Component {

  componentDidMount(){
    this.props.actions.getProducts();
  }

  addToCart=(product)=>{
    this.props.actions.addToCart({quantity:1,product})
    alertify.success(product.title + "sepete eklendi!")
  }

  render() {
    return (
      <div>
       <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Description</th>
          <th></th>
         
        </tr>
      </thead>
      <tbody>
        {this.props.products.map(product=>(
            <tr key={product.id}>
            <th scope="row">{product.id}</th>
            <td><Link to={"/saveproduct/"+ product.id}>{product.title}</Link></td>
            <td>{product.price}</td>
            <td>{product.description}</td>
            <td>
              <Button color="warning" onClick={()=>this.addToCart(product)}>
              Add to Cart
              </Button>
            </td>
           
          </tr>
        ))}
   
     
    
      </tbody>
    </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products:state.productListReducer
  };
}
function mapDispatchToProps(dispatch){
  return{
      actions:{
          getProducts:bindActionCreators(productsActions.getProducts,dispatch),
          addToCart:bindActionCreators(cartActions.addToCart,dispatch)
      }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductList);
