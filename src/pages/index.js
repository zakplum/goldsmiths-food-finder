import React from 'react';

const Home = () => {
  return (
      <div className="container">
      <div className="heading"> <h2 class="header">Welcome to our website!</h2></div>
      <div className="content-container">
            <p>
              Here you can search for restaurants based on your dietary
              requirements and allergens.
            </p>
            <input class="searchbars" placeholder="Search by Name" />
            <input class="searchbars" placeholder="Search by Location" />
            <input class="searchbars" placeholder="Search by Allergen" />
            </div>
          </div> 
  );
};
  
export default Home;


