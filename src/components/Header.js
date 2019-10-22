import React from "react";
import { connect } from "react-redux";

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.image} alt={props.name} />
      </figure>
      <h2>{props.name}</h2>
      <p>Amount: ${props.price}</p>
    </>
  );
};

function mapStateToProps(state) {
  return {
    name: state.details.car.name,
    price: state.details.car.price,
    image: state.details.car.image
  };
}

export default connect(mapStateToProps)(Header);
