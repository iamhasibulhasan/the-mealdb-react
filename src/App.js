import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Restaurant from './components/Restaurant/Restaurant';
import Meal from './components/Meal/Meal';
import NotFound from './components/NotFound/NotFound';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Restaurant></Restaurant>
          </Route>
          <Route path="/meal/:idMeal">
            <Meal></Meal>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
