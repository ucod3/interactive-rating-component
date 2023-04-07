// Import the toggleHiddenClassAfterSubmit function from the toggleHiddenClassAfterSubmit module
import toggleHiddenClassAfterSubmit from './toggleHiddenClassAfterSubmit';

// Import the selectedRatingText function from the selectedRatingText module
import selectedRatingText from './selectedRatingText';

// Define and export the default function called handleAfterSubmit
export default function handleAfterSubmit(value) {
  // Call the toggleHiddenClassAfterSubmit function to toggle the hidden class after form submission
  toggleHiddenClassAfterSubmit();

  // Call the selectedRatingText function and pass the  value to it
  selectedRatingText(value);
}
