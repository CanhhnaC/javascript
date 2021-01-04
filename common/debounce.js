// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// `wait` milliseconds.
function debounce(func, wait) {
  let timeout;

  // This is the function that is returned and will be executed many times
  // We spread (...args) to capture any number of parameters we want to pass
  return function executedFunction(...args) {
    // The callback function to be executed after the debounce time has elapsed
    const later = () => {
      // null timeout to indicate the debounce ended
      timeout = null;

      // Execute the callback
      func(...args);
    };
    // This will reset the waiting every function execution.
    clearTimeout(timeout);

    // Restart the debounce waiting period.
    timeout = setTimeout(later, wait);
  };
}

// Usage
const find = debounce((text) => fetchData(text), 2000);
inputSearch.addEventListener("keyup", (event) => {
  find(event.target.value);
});
