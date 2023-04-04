// Import the getSelectedCount function from the ratingCount module
import { getSelectedCount } from './ratingCount';

// Import the handleAfterSubmit function from the handleAfterSubmit module
import handleAfterSubmit from './handleAfterSubmit';

// Define and export the default function called handleSelectedCount
export default function handleSelectedCount() {
  // Call the getSelectedCount function to retrieve the selected count
  const count = getSelectedCount();

  // Call the handleAfterSubmit function and pass the count value to it
  handleAfterSubmit(count);
}
