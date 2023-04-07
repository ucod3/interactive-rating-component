
let currentSelectedRating;

export default function selectedRating(element) {
  // Store the selected rating
  currentSelectedRating = element;
}

export function getSelectedRating() {
  // Return the stored selected rating
  return currentSelectedRating;
}
