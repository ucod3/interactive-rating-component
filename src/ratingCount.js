// Initialize the selectedCount variable
let selectedCount = 0;

// Define and export the updateSelectedCount function
export function updateSelectedCount(incurrent) {
  if (incurrent) {
    // Increment the selectedCount if the incurrent parameter is true
    selectedCount++;
  } else {
    // Decrement the selectedCount if the incurrent parameter is false
    selectedCount--;
  }
}

// Define and export the getSelectedCount function
export function getSelectedCount() {
  // Return the current value of selectedCount
  return selectedCount;
}
