import React, { useEffect, useState } from 'react';
import "./Meal.css";
import { useParams, useHistory } from 'react-router-dom';
import MealDetails from '../MealDetails/MealDetails';

const Meal = () => {
    const [details, setDetails] = useState([]);
    const { idMeal } = useParams();
    console.log(idMeal);

    useEffect(() => {
        let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data.meals));
    }, []);
    return (
        <div>
            {
                details.map(detail => <MealDetails
                    key={detail.idMeal}
                    detail={detail}
                ></MealDetails>)
            }
        </div>
    );
};

export default Meal;