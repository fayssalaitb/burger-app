import React from "react";
import Aux from "../../../hoc/Aux";
const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igkey => {
    return (
      <li key={igkey}>
        <span style={{ textTransform: "capitalize" }}>
          {igkey}: {props.ingredients[igkey]}
        </span>
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Contenue to Checkout?</p>
    </Aux>
  );
};
export default orderSummary;
