import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Create() {
  const [form, setForm] = useState({
    name: "",
    ingredients: "",
    instructions: "",
  });
  const navigate = useNavigate();

  // Update form fields
  function updateForm(value) {
    return setForm((prev) => ({ ...prev, ...value }));
  }

  // Handle form submission
  async function onSubmit(e) {
    e.preventDefault();

    const newRecipe = { ...form };

    await fetch("https://didactic-guacamole-jjrw6vv9qq9jh544w-5050.app.github.dev/recipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    }).catch(error => {
      window.alert(error);
      return;
    });

    setForm({ name: "", ingredients: "", instructions: "" });
    navigate("/");
  }

  return (
    <div>
      <h3>Create New Recipe</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Recipe Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ingredients">Ingredients</label>
          <textarea
            className="form-control"
            id="ingredients"
            value={form.ingredients}
            onChange={(e) => updateForm({ ingredients: e.target.value })}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="instructions">Cooking Instructions</label>
          <textarea
            className="form-control"
            id="instructions"
            value={form.instructions}
            onChange={(e) => updateForm({ instructions: e.target.value })}
          ></textarea>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create Recipe"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
