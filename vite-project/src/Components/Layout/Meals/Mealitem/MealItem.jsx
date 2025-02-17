import React from "react";
import MealitemForm from "./MealitemForm";
import "./Mealitem.css";
const Mealitem = (props) => {
  return (
    <>
    <li key={props.id} className="meal-item">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">${props.price.toFixed(2)}</div>
      </div>
      <div>
        <MealitemForm />
      </div>
    </li>
    </>
  );
};

export default Mealitem;
