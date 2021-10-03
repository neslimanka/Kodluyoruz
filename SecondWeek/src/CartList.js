import React, { Component } from 'react'
import { Button, Table } from 'reactstrap'

export default class CartList extends Component {
    
    renderCart() {
        return (

            <Table striped>
                <thead>
                    <tr>
                        <th>Product Id</th>
                        <th>Category Id</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Units In Stock</th>
                        
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {this.props.cart.map(cartItem => (
                        
                        <tr key={cartItem.product.id}>
                            <td>{cartItem.product.id}</td>
                            <td>{cartItem.product.categoryId}</td>
                            <td>{cartItem.product.title}</td>
                            <td>{cartItem.product.price}</td>
                            <td>{cartItem.product.description}</td>
                            
                            <td>
                                <Button
                                    color="danger"
                                    onClick={() => this.props.removeFromCart(cartItem.product)}
                                >
                                    Remove
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>


        )
    }

    render() {
        
            return ( 

             <div>
             {this.renderCart()}
            </div>
                
                )
    }
}

