import React from "react";

const CategoriesPanel = () => {
  const handleClick = async (e) => {
    e.preventDefault();

    //await login(req,res);
    
    
    console.log(e.target.innerText);
  };
  return (
    <div className="">
      <ul className="flex space-x-10 justify-center text-xl p-4 f">
        <li>
          <button onClick={handleClick}>School</button>
        </li>
        <li>
          <button onClick={handleClick}>Kindergarten </button>
        </li>
        <li>
          <button onClick={handleClick}>Child</button>
        </li>
        <li>
          <button onClick={handleClick}>Teenager</button>
        </li>
      </ul>
    </div>
  );
};

export default CategoriesPanel;
