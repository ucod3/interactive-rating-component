// Import the main stylesheet for the application
import './style.css';

// Import the submitHandler function from the submitHandler module
import submitHandler from './submitHandler';

// Import the ratingButtonHandler function from the ratingButtonHandler module
import ratingButtonHandler from './ratingButtonHandler';

// Get the ratingButtonsContainer DOM element
const ratingButtonsContainer = document.querySelector(
  '#ratingButtonsContainer'
);
// Add click event listener to the ratingButtonsContainer DOM element
ratingButtonsContainer.addEventListener('click', ratingButtonHandler);

// Get the submitBtn DOM element
const submitBtn = document.querySelector('#submitBtn');
// Add click event listener to the submitBtn
submitBtn.addEventListener('click', submitHandler);
