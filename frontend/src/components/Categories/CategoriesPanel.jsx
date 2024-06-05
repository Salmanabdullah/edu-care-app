import React,{useEffect,useState} from "react";

const CategoriesPanel = () => {
  const handleClick = async (e) => {
    e.preventDefault();

    //await login(req,res);
    console.log(e.target.innerText);
  };

  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/schools',{
          method: 'GET',
          //body: JSON.stringify({ email, password })
        });
        setSchools(response.data.features);
      } catch (error) {
        console.error('Error fetching the schools data', error);
      }
    };

    fetchSchools();
  }, []);
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
