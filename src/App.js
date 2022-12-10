import HomePage from "./features/homePage/HomePage";
import RecipeDetails from "./features/recipes-details/RecipeDetails";
import { Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="recipe/:id" element={ <RecipeDetails/> } />
      </Routes>
    <Footer />
    </div>
  );
}

export default App;
