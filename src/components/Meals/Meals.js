import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './Meals.css';

const Meals = (props) => {
    const { idMeal, strMeal, strMealThumb, strInstructions, strTags } = props.meals;

    let history = useHistory();


    const viewMeal = () => {
        history.push(`/meal/${idMeal}`);
    }
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        {strInstructions.substring(0, 150) + " ..."}
                    </Card.Text>
                    <Link to={`/meal/${idMeal}`}>
                        <Button onClick={() => viewMeal()} variant="primary" size="sm">See More</Button>
                    </Link>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{strTags ? strTags : "none"}</small>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Meals;