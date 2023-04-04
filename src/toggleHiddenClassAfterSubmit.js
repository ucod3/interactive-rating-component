// Import the toggleHiddenClass function from the toggleHiddenClass module
import toggleHiddenClass from './toggleHiddenClass';

// Define and export the default function called toggleHiddenClassAfterSubmit
export default function toggleHiddenClassAfterSubmit() {
  // Get the thank you container DOM element
  const thanks = document.querySelector('#thankyouContainer');

  // Call the toggleHiddenClass function and pass the thank you container element to it
  toggleHiddenClass(thanks);

  // Get the rating container DOM element
  const ratingContainer = document.querySelector('#ratingContainer');
  // Call the toggleHiddenClass function and pass the rating container element to it
  toggleHiddenClass(ratingContainer);
}
