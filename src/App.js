import HomePage from "./features/homePage/HomePage";
import RecipeDetails from "./features/recipes-details/RecipeDetails";
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="recipe/:id" element={ <RecipeDetails/> } />
      </Routes>

    </div>
  );
}

export default App;
