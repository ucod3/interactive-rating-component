// Define and export the default function called toggleButtonClass
export default function toggleButtonClass(
  element,
  commonClassName,
  addBgClassName,
  removeBgClassName,
  addTextColorClassName
) {
  // Check if the given element contains the commonClassName
  if (element.classList.contains(commonClassName)) {
    // Toggle the removeBgClassName, addBgClassName, and addTextColorClassName on the given element
    element.classList.toggle(removeBgClassName);
    element.classList.toggle(addBgClassName);
    element.classList.toggle(addTextColorClassName);
  }
}
