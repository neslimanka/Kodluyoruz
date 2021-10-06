import React, { Component } from "react";
import { Container } from "reactstrap";
import alertify from "alertifyjs";
import { Grid, Box } from "@material-ui/core";

export default class About extends Component {
  state = { products: [], cart: [] };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.title + " removed from cart!");
  };
  render() {
    return (
      <div>
        <Container>
        
          
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box sx={{ textAlign: "center", m: 3 }}>
                <h2 style={{ color: "#f0d722" }}>ABOUT US</h2>
              </Box>
              <Box>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque maximus orci quis justo commodo, sed faucibus lorem
                posuere. Mauris dictum pharetra purus quis sollicitudin.
                Curabitur tincidunt dolor vitae quam ullamcorper faucibus.
                Aliquam nulla lectus, aliquet et viverra vitae, aliquet at
                magna. Nunc sodales gravida mi et fringilla. Etiam scelerisque
                gravida massa id aliquam. Mauris enim ex, elementum eget
                porttitor vitae, interdum vitae ligula. Integer scelerisque quis
                elit vel posuere. Nullam gravida mattis mi in fringilla.
                Praesent vel purus scelerisque, dignissim erat id, venenatis
                neque. Nam tempor nisl nec nisl gravida, nec rutrum lorem
                viverra. Mauris semper venenatis dictum. Ut sodales orci eu arcu
                vestibulum mollis. Sed aliquam mi nec odio ornare rutrum.
                Pellentesque sagittis dictum sapien, ut venenatis lectus
                hendrerit at. Sed dolor magna, euismod vel porta non, ultricies
                ac dui. Donec nec commodo odio. Nunc tempus tristique eleifend.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                semper ante libero, eget finibus diam mattis eget. Proin feugiat
                urna ac ex condimentum elementum. Cras aliquet est ac erat
                dignissim, vitae mattis turpis maximus. Vestibulum commodo
                dignissim ipsum eu consectetur. Phasellus quis vehicula nisi,
                sit amet porta ligula. Nunc justo nisi, scelerisque nec dui sed,
                laoreet mattis nulla. Vestibulum vehicula leo at rhoncus
                venenatis. Sed mattis elit leo, quis sollicitudin eros pretium
                eu. Curabitur lectus nunc, vestibulum et nibh nec, iaculis
                egestas eros. Vivamus id pulvinar enim. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Nulla dignissim leo sit amet enim interdum, a vehicula
                est lacinia. In justo nisl, dignissim non enim placerat,
                faucibus semper velit. Nunc sit amet nulla justo. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Nunc et aliquam dui. Maecenas sit amet odio
                et sem vehicula cursus. Nam quis blandit velit. Nullam hendrerit
                consectetur mauris et feugiat. Aliquam pretium magna risus, ac
                egestas mauris luctus non. Donec egestas tempus ante non
                volutpat. Praesent egestas mauris nulla, sit amet ultricies
                justo finibus eget. Phasellus felis odio, consequat eget elit
                et, hendrerit vestibulum neque. Mauris lobortis porta sapien,
                non fermentum libero porta a. Proin in libero sem. Vestibulum
                vehicula porta dolor, at malesuada est consequat sit amet. In ac
                massa placerat orci auctor finibus eget vel augue. Morbi
                sollicitudin augue feugiat justo ornare placerat. Praesent
                vulputate risus non turpis lacinia rutrum. Integer nisi metus,
                gravida eu purus vitae, feugiat pretium eros. Curabitur nec
                lectus risus. Class aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos. Donec nec congue
                magna. Integer mollis varius luctus. Curabitur cursus sed lorem
                non malesuada. Phasellus in vehicula ipsum. Nam congue velit ut
                nunc vulputate fringilla. In id ex in dolor efficitur lacinia
                laoreet nec massa. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque maximus orci quis justo commodo, sed faucibus lorem
                posuere. Mauris dictum pharetra purus quis sollicitudin.
                Curabitur tincidunt dolor vitae quam ullamcorper faucibus.
                Aliquam nulla lectus, aliquet et viverra vitae, aliquet at
                magna. Nunc sodales gravida mi et fringilla. Etiam scelerisque
                gravida massa id aliquam. Mauris enim ex, elementum eget
                porttitor vitae, interdum vitae ligula. Integer scelerisque quis
                elit vel posuere. Nullam gravida mattis mi in fringilla.
                Praesent vel purus scelerisque, dignissim erat id, venenatis
                neque. Nam tempor nisl nec nisl gravida, nec rutrum lorem
                viverra. Mauris semper venenatis dictum. Ut sodales orci eu arcu
                vestibulum mollis. Sed aliquam mi nec odio ornare rutrum.
                Pellentesque sagittis dictum sapien, ut venenatis lectus
                hendrerit at. Sed dolor magna, euismod vel porta non, ultricies
                ac dui. Donec nec commodo odio. Nunc tempus tristique eleifend.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                semper ante libero, eget finibus diam mattis eget. Proin feugiat
                urna ac ex condimentum elementum. Cras aliquet est ac erat
                dignissim, vitae mattis turpis maximus. Vestibulum commodo
                dignissim ipsum eu consectetur. Phasellus quis vehicula nisi,
                sit amet porta ligula. Nunc justo nisi, scelerisque nec dui sed,
                laoreet mattis nulla. Vestibulum vehicula leo at rhoncus
                venenatis. Sed mattis elit leo, quis sollicitudin eros pretium
                eu. Curabitur lectus nunc, vestibulum et nibh nec, iaculis
                egestas eros. Vivamus id pulvinar enim. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Nulla dignissim leo sit amet enim interdum, a vehicula
                est lacinia. In justo nisl, dignissim non enim placerat,
                faucibus semper velit. Nunc sit amet nulla justo. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Nunc et aliquam dui. Maecenas sit amet odio
                et sem vehicula cursus. Nam quis blandit velit. Nullam hendrerit
                consectetur mauris et feugiat. Aliquam pretium magna risus, ac
                egestas mauris luctus non. Donec egestas tempus ante non
                volutpat. Praesent egestas mauris nulla, sit amet ultricies
                justo finibus eget. Phasellus felis odio, consequat eget elit
                et, hendrerit vestibulum neque. Mauris lobortis porta sapien,
                non fermentum libero porta a. Proin in libero sem. Vestibulum
                vehicula porta dolor, at malesuada est consequat sit amet. 
              </Box>
            </Grid>
            
          </Grid>
        </Container>
      </div>
    );
  }
}
