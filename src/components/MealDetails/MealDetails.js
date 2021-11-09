import React from 'react';
import { Badge, Card } from 'react-bootstrap';
import "./MealDetails.css";

const MealDetails = (props) => {
    const { strMeal, strInstructions, strCategory, strMealThumb, strTags, strYoutube } = props.detail;

    return (
        <div className="meal-details">
            <img src={strMealThumb} alt="" />
            <div>
                <h2>{strMeal}</h2>
                <p>Tags: <Badge bg="primary">{strTags}</Badge> Category: <Badge bg="primary">{strCategory}</Badge></p>
                <p>Visit: {strYoutube}</p>
                <p>{strInstructions}</p>
            </div>
        </div>
    );
};

export default MealDetails;