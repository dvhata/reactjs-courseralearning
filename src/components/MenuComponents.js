import React, { Component } from "react";
import { Media } from "reactstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        // key to distinguish between different element in dish[]
        <div key={dish.id} className="col-12 mt-5">
          <Media>
            <Media left>
              <Media object src={dish.image} alt={dish.name}></Media>
            </Media>
            <Media body className="ml-5">
              <Media heading>
                {dish.name}
                <p>{dish.description}</p>
              </Media>
            </Media>
          </Media>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">
          <Media list>{menu}</Media>
        </div>
      </div>
    );
  }
}

export default Menu;
