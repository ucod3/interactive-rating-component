// Define and export the default function called selectedRatingText
export default function selectedRatingText(count) {
  // Get the selectedRating DOM element
  const selectedRating = document.querySelector('#selectedRating');

  // Update the text content of the selectedRating element with the given count value
  selectedRating.textContent = `You have selected ${count} out of 5`;
}
