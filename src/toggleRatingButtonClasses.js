// This file contains the function that toggles the classes for the rating buttons
// It also imports the selectedRating function from the selectedRating.js file
import selectedRating from './selectedRating';

// Define and export the default function called toggleRatingButtonClasses
export default function toggleRatingButtonClasses(element) {
  //Get all the rating buttons
  const ratingButtons = document.querySelectorAll('.ratingButtons');

  // Define the class names for the rating buttons
  const addBgClassName = 'bg-gray-medium';
  const defaultBgClassName = 'bg-white-Light';
  const addTextColorClassName = 'text-white';

  // Iterate through all rating buttons, and update their classes accordingly. If a button is not the clicked button, reset it to the default state. If it is the clicked button, apply the active styling classes.
  ratingButtons.forEach(button => {
    const buttonClassList = button.classList;
    if (button !== element) {
      buttonClassList.remove(addBgClassName, addTextColorClassName);
      buttonClassList.add(defaultBgClassName);
    } else {
      buttonClassList.add(addBgClassName, addTextColorClassName);
      buttonClassList.remove(defaultBgClassName);
    }
  });

  selectedRating(element.value);
}
