import React, { useEffect, useState } from "react";
import AccordionCard from "../components/AccordionCard";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../redux/Slice";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
   const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { loading, data = [] } = useSelector(
    (state) => state.userRecipes
  );
  const navigate = useNavigate();


   const filteredRecipes = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );



  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <>

      {/* HERO SECTION */}
      <section
        className="relative min-h-screen top-0 flex items-center w-full justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/dish.jpg')" }}
      >
         <div className=" top-0 min-h-screen absolute inset-0 bg-black/50"></div>


        <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-white text-center">
          Welcome to Abhi Foodie 🍔
        </h1>
      </section>

      {/* LIST SECTION */}
      <section className="px-6 py-12">
 {/* Search Section */}
       
<form className="max-w-md mx-auto mb-10">
  <label
    htmlFor="search"
    className="block mb-2 text-sm font-medium text-gray-700 sr-only"
  >
    Search
  </label>

  <div className="relative">
    {/* Icon */}
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <svg
        className="w-4 h-4 text-gray-500"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
          d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
        />
      </svg>
    </div>

    {/* Input */}
    <input
      type="search"
      id="search"
      placeholder="Search recipes..."
       onChange={(e) => setSearch(e.target.value)}
      className="block w-full pl-9 pr-20 py-3 bg-white border border-gray-300
        text-gray-900 text-sm rounded-lg focus:ring-red-400 focus:border-red-400
        shadow-sm"
    />

    {/* Button */}
    <button
      type="button"
      className="absolute right-2 bottom-2 text-white bg-red-500
        hover:bg-red-600 font-medium rounded-md text-xs px-4 py-1.5 transition"
    >
      Search
    </button>
  </div>
</form>



        {loading && (
          <p className="text-center text-lg font-medium">
            Loading recipes...
          </p>
        )}

         {!loading && filteredRecipes.length === 0 && (
          <p className="text-center text-lg font-medium text-gray-600">
            No recipes found 😢
          </p>
        )}

        {!loading && (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {(search ? filteredRecipes : data).map((item) => (
              <div
                key={item.id}
                className="
                 bg-white rounded-xl overflow-hidden border border-gray-300 shadow-sm transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-2 hover:border-gray-600 ">
                {/* IMAGE (separate hover control) */}
                <div className="group overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                     onClick={() => navigate(`/recipe/${item.id}`)}
                    className="
                      h-48 w-full object-cover
                      transition-transform duration-500
                      group-hover:scale-110
                    "/>
                </div>

                {/* CONTENT */}
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h2>

                  <AccordionCard ingredients={item.ingredients} />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default HomePage;
