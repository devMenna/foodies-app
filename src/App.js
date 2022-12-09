import HomePage from "./features/homePage/HomePage";
import RecipeDetails from "./features/recipes-details/RecipeDetails";
import { Routes, Route } from "react-router-dom"
import Navbar from "./Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="recipe/:id" element={ <RecipeDetails/> } />
      </Routes>

    </div>
  );
}

export default App;
