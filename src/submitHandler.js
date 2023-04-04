// Import the handleSelectedCount function from the handleSelectedCount module
import handleSelectedCount from './handleSelectedCount';

// Define and export the default function called submitHandler
export default function submitHandler(e) {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Call the handleSelectedCount function to process the selected count
  handleSelectedCount();
}
