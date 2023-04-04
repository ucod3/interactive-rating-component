// Import the toggleButtonClass function from the toggleButtonClass module
import toggleButtonClass from './toggleButtonClass';

// Import the updateSelectedCount function from the ratingCount module
import { updateSelectedCount } from './ratingCount';

// Define and export the default function called toggleRatingButtonClasses
export default function toggleRatingButtonClasses(element) {
  // Get the classList of the given element
  const ele = element.classList;

  // Define the class names for the rating buttons
  const commonClassName = 'ratingButtons';
  const addBgClassName = 'bg-gray-medium';
  const removeBgClassName = 'bg-white-Light';
  const addTextColorClassName = 'text-white';

  // Check if the given element contains the addBgClassName
  const wasClassActive = ele.contains(addBgClassName);

  // If the given element contains the commonClassName
  if (ele.contains(commonClassName)) {
    // Call the toggleButtonClass function with the appropriate arguments
    toggleButtonClass(
      element,
      commonClassName,
      addBgClassName,
      removeBgClassName,
      addTextColorClassName
    );
    // Update the selected count based on whether the class was active or not
    updateSelectedCount(!wasClassActive);
  }
}
