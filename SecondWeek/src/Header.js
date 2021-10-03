import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Header = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3" >Better clothing for the planet</h1>
        <p className="lead">Create screens directly in Method or add your images from Sketch or</p>
        <p className="lead">Figma.You can even sync designs from your cloud storage!</p>
        
        <p className="lead">
          <Button color="primary">Shop All</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Header;