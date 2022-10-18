import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function LeftAside() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/categories')
      .then((response) => response.json())
      .then((json) => setCategories(json));
  }, []);
  return (
    <div>
      <h4>All Categories {categories.length} </h4>

      <div>
        {categories.map((category) => {
          const { id, name } = category;
          return (
            <div key={id}>
              <p>
                <Link to={`category/${id}`}> {name} </Link>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LeftAside;
