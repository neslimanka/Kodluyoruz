import React, { Component } from 'react'
import {ListGroup,ListGroupItem} from 'reactstrap';

export default class CategoryList extends Component {

    constructor(props){
        super(props);
        this.state={categories:[
            {categoryId:1,categoryName:"Beverages"},
            {categoryId:1,categoryName:"Condiments"}
           
        
        ]
    };
    }

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <ListGroup>
                    {
                        //map : listenın elemanlarını tek tek döner,döndüğü elemanları yenı bir liste yapar.
                        this.state.categories.map(category=>(
                            <ListGroupItem key={category.categoryId}>{category.categoryName}</ListGroupItem>
                        ))
                    }
                    
                    
                </ListGroup>
            </div>
        )
    }
}
