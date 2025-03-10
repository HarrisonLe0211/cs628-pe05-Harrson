import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const response = await fetch(`https://didactic-guacamole-jjrw6vv9qq9jh544w-5050.app.github.dev/recipe/${id}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setRecipe(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchRecipe();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!recipe) return <p>No recipe found.</p>;

  return (
    <div>
      <h2>{recipe.name}</h2>
      <h4>Ingredients:</h4>
      <p>{recipe.ingredients}</p>
      <h4>Cooking Instructions:</h4>
      <p>{recipe.instructions}</p>

      {/* "Back to Recipe List" button */}
      <button className="btn btn-primary" onClick={() => navigate("/")}>
        Back to Recipe List
      </button>
    </div>
  );
}
