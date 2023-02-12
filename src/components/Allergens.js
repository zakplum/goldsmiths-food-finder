import React, { useState } from 'react';

const allergens = [
    { id: "gluten", name: "Gluten" },
    { id: "dairy", name: "Dairy" },
    { id: "egg", name: "Egg" },
    { id: "soy", name: "Soy" },
    { id: "wheat", name: "Wheat" },
    { id: "peanuts", name: "Peanuts" },
    { id: "treenuts", name: "Tree nuts" },
    { id: "fish", name: "Fish" },
    { id: "shellfish", name: "Shellfish" },
    { id: "mustard", name: "Mustard" },
    { id: "celery", name: "Celery" },
    { id: "sesame", name: "Sesame and other seeds" }
  ];

  const AllergenFilter = () => {
    const [selectedAllergens, setSelectedAllergens] = useState([]);
  
    const handleChange = (e) => {
      if (e.target.checked) {
        setSelectedAllergens([...selectedAllergens, e.target.value]);
      } else {
        setSelectedAllergens(selectedAllergens.filter((allergen) => allergen !== e.target.value));
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Selected allergens: ', selectedAllergens.name);
    };

  return (
    <form onSubmit={handleSubmit}>
    <div>
      {allergens.map(allergen => (
        <div style={{display: 'inline-block', marginRight: '10px'}} key={allergen.id}>
          <input type="checkbox" id={allergen.id} name={allergen.id} onChange={handleChange} />
          <label htmlFor={allergen.id}>{allergen.name}</label>
        </div>
      ))}
    </div>
    <button type="submit">Search</button>
  </form>
  );
};

export default AllergenFilter;