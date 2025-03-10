import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

    //Note: I did some research and integrated these Bootstrap class names. The ones used here are as follow:
    //
    //      - text-decoration-none: Removes the default underline from links.
    //      - fw-bold: Applies a bold font weight.
    //      - fs-5: Enlarges the text slightly.
    //      - Container: Centers your content and applies horizontal padding.
    //      - mt-4, mb-3: Utility classes for margin top (mt) and margin bottom (mb). The numeric 
    //        value represents spacing units.
    //      - table, table-striped: Classes that style HTML tables, adding borders, padding, and 
    //        alternating row stripes.
const Recipe = (props) => (
  <tr>
    <td>
      {/* Remove underline, make bold, and enlarge the text */}
      <Link
        to={`/recipe/${props.recipe._id}`}
        className="text-decoration-none fw-bold fs-5"
      >
        {props.recipe.name}
      </Link>
    </td>
    <td>
      <Link className="btn btn-link" to={`/edit/${props.recipe._id}`}>
        Edit
      </Link>
      |
      <button
        className="btn btn-link"
        onClick={() => props.deleteRecipe(props.recipe._id)}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function getRecipes() {
      try {
        const response = await fetch("https://0kxdfj8s-5050.usw2.devtunnels.ms/recipe");
        if (!response.ok) {
          throw new Error(`An error occurred: ${response.statusText}`);
        }
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        window.alert(error);
      }
    }
    getRecipes();
  }, []);

  async function deleteRecipe(id) {
    try {
      await fetch(`https://0kxdfj8s-5050.usw2.devtunnels.ms/recipe/${id}`, {
        method: "DELETE",
      });
      const newRecipes = recipes.filter((el) => el._id !== id);
      setRecipes(newRecipes);
    } catch (error) {
      window.alert(error);
    }
  }

  function recipeList() {
    return recipes.map((recipe) => (
      <Recipe recipe={recipe} deleteRecipe={deleteRecipe} key={recipe._id} />
    ));
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Recipe List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Recipe Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{recipeList()}</tbody>
      </table>
    </div>
  );
}
