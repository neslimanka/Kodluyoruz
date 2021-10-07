import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators} from "redux"
import * as productsActions from "../../redux/actions/productsActions";
import { Table } from 'reactstrap';


class ProductList extends Component {

  componentDidMount(){
    this.props.actions.getProducts();
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
         
        </tr>
      </thead>
      <tbody>
        {this.props.products.map(product=>(
            <tr key={product.id}>
            <th scope="row">{product.id}</th>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
           
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
          getProducts:bindActionCreators(productsActions.getProducts,dispatch)
      }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductList);
