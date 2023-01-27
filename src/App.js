import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './styles.css';

const App = () => {
  const [showContent, setShowContent] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 2000);
  }, []);

  return (
    <div>
        <CSSTransition 
          in={!showContent} 
          timeout={1000} 
          classNames="fade"
          unmountOnExit
        >
          <h2 class="animate-text">Hello</h2>
        </CSSTransition>
        <CSSTransition
          in={showContent}
          timeout={1000}
          classNames="fade"
          unmountOnExit
        >
          <div>
            <nav>
              <a href="#">Account</a>
              <a href="#">Search</a>
              <a href="#">About</a>
              <a href="#">Location</a>
              <a href="#">Blog</a>
              <a href="#">Contact Us</a>
              <a href="#">Sign Up</a>
              <a href="#">Sign In</a>
            </nav>
            <h2>Welcome to our website!</h2>
            <p>
              Here you can search for restaurants based on your dietary
              requirements and allergens.
            </p>
            <input placeholder="Search by Name" />
            <input placeholder="Search by Location" />
            <input placeholder="Search by Cuisine" />
          </div>
        </CSSTransition>
    </div>
  );
};

export default App;
