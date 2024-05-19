import React from "react";

const CategoriesPanel = () => {
  return (
    <div className="">
      <ul className="flex space-x-10 justify-center text-xl p-4 f">
        <li>
          <button>School</button>
        </li>
        <li>
          <button>Kindergarten</button>
        </li>
        <li>
          <button>Child</button>
        </li>
        <li>
          <button>Teenager</button>
        </li>
      </ul>
    </div>
  );
};

export default CategoriesPanel;
