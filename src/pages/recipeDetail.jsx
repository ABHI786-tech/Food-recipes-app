import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const RecipeDetail = () => {
  const { id } = useParams();
  const { data = [] } = useSelector((state) => state.userRecipes);

  const recipe = data.find((item) => item.id == id);

  console.log(recipe,"recipe")

  if (!recipe) {
    return <p className="text-center mt-10">Recipe not found 😢</p>;
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-18">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-80 object-cover rounded-xl mb-6"
      />

      <h1 className="text-4xl font-bold mb-4">{recipe.name}</h1>

      <h2><strong>Meal type:</strong> {recipe.mealType}</h2><br />
      <h2><strong>Rating:</strong>  {recipe.rating}</h2><br />

      {/* tags section  */}
     <div className="mt-4">
  <h2 className="text-lg font-semibold mb-2"> <strong>Tags 🏷️</strong></h2>

  <div className="flex flex-wrap gap-2">
    {recipe.tags.map((tag, index) => (
      <span
        key={index}
        className="
          px-3 py-1 text-sm font-medium
          bg-red-200 text-red-600
          rounded-full
          hover:bg-red-400 transition
        "
      >
        #{tag}
      </span>
    ))}
  </div>
</div><br />


      <h2 className="text-xl font-semibold mb-2"> <strong>Ingredients 🍽️</strong></h2>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        {recipe.ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul><br />
      <h2 className="text-xl font-semibold mb-2"><strong>instructions</strong></h2>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        {recipe.instructions.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>
    </section>
  );
};

export default RecipeDetail;
