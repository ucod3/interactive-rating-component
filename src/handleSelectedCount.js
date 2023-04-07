// Import the getSelectedRating function from the selectedRating module
import { getSelectedRating } from './selectedRating';

// Import the handleAfterSubmit function from the handleAfterSubmit module
import handleAfterSubmit from './handleAfterSubmit';

// Define and export the default function called handleSelectedCount
export default function handleSelectedCount() {
    // Call the getSelectedRating function to retrieve the selected rating
  const value = getSelectedRating();

  // Call the handleAfterSubmit function to process the selected rating
  handleAfterSubmit(value);
}
