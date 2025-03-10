import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import RecipeList from "./components/recipeList";
import RecipeDetails from "./components/recipeDetails";
import Edit from "./components/edit";
import Create from "./components/create";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Display the list of recipes at the root path */}
        <Route path="/" element={<RecipeList />} />

        {/* Viewing an individual recipe's details */}
        <Route path="/recipe/:id" element={<RecipeDetails />} />

        {/* Creating and editing recipes */}
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
};
export default App;
