// Define and export the default function called toggleHiddenClass
export default function toggleHiddenClass(element) {
  // Toggle the 'hidden' class on the given element
  element.classList.toggle('hidden');

  // Toggle the 'flex' class on the given element
  element.classList.toggle('flex');
}
