import React from 'react';
import AllergenFilter from '../components/Allergens';

const Home = () => {
  return (
    <>
    <div className="content-container">
            <h2>Welcome to our website!</h2>
    
            <p>
              Here you can search for restaurants based on your dietary requirements and allergens.
            </p>
            <AllergenFilter />
            </div>

            </>
  );
};
  
export default Home;


