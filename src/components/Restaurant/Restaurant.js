import React, { useEffect, useState } from 'react';
import Meals from '../Meals/Meals';
import './Restaurant.css';
import SearchField from '../SearchField/SearchField';
import { Row, Col, Spinner } from 'react-bootstrap';

const Restaurant = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText]);

    const handleSearchText = e => {
        const text = e.target.value;
        setSearchText(text);
        console.log(text);
    }

    return (
        <div>
            <SearchField handleSearchText={handleSearchText}></SearchField>

            {
                meals.length === 0 ?
                    <Spinner animation="border" />
                    :
                    <Row xs={1} md={3} className="g-4 mb-5">
                        {
                            meals.map(meal => <Meals
                                key={meal.idMeal}
                                meals={meal}
                            ></Meals>)
                        }
                    </Row>
            }
        </div>
    );
};

export default Restaurant;