// Import the toggleRatingButtonClasses function from the toggleRatingButtonClasses module
import toggleRatingButtonClasses from './toggleRatingButtonClasses';

// Define and export the default function called ratingButtonHandler
export default function ratingButtonHandler(e) {
  // Get the clicked button from the event object
  const clickedButton = e.target;

  // Call the toggleRatingButtonClasses function and pass the clicked button to it
  toggleRatingButtonClasses(clickedButton);
}
