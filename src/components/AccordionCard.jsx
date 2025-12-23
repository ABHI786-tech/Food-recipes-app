import React, { useState } from "react";

const AccordionCard = ({ ingredients }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-md mx-auto mt-3">
      <div>

        {/* ACCORDION HEADER */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          className={`flex items-center justify-between w-full p-4 font-medium
            border border-gray-300 rounded-lg gap-3
            hover:bg-gray-100 transition
            ${isOpen ? "rounded-b-none" : ""}`}
        >
          <span>Ingredients</span>

          {/* ICON */}
          <svg
            className={`w-5 h-5 transition-transform duration-300 
              ${isOpen ? "rotate-180" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m5 15 7-7 7 7"
            />
          </svg>
        </button>

        {/* ACCORDION BODY */}
        {isOpen && (
          <div className="border border-t-0 border-gray-300 rounded-b-lg bg-white">
            <div className="p-4 text-sm text-gray-700 space-y-1">
              {Array.isArray(ingredients) ? (
                ingredients.map((item, index) => (
                  <p key={index}>• {item}</p>
                ))
              ) : (
                <p>{ingredients}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccordionCard;
