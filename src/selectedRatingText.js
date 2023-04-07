// Define and export the default function called selectedRatingText
export default function selectedRatingText(value) {
  // Get the selectedRating DOM element
  const selectedRating = document.querySelector('#selectedRating');

  // Update the text content of the selectedRating element with the given count value
  selectedRating.textContent = `You have selected ${value} out of 5`;
}
