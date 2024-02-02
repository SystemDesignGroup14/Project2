'use strict';
// Define the MakeMultiFilter function
function MakeMultiFilter(originalArray) {
    // Make a copy of the original array
    let currentArray = [...originalArray];
  
    // Define the arrayFilterer function
    function arrayFilterer(filterCriteria, callback) {
      // If filterCriteria is a function, filter the current array
      if (typeof filterCriteria === 'function') {
        currentArray = currentArray.filter(filterCriteria);
      } else {
        // If filterCriteria is not a function, return the current array
        return currentArray;
      }
  
      // If callback is a function, call it with the current array
      if (typeof callback === 'function') {
        callback.call(originalArray, currentArray);
      }
  
      // Return the arrayFilterer function for chaining
      return arrayFilterer;
    }
  
    // Return the arrayFilterer function
    return arrayFilterer;
  }
  
  // Check if we're in a Node.js environment
  if (typeof module !== 'undefined') {
    // If so, export the MakeMultiFilter function
    module.exports = MakeMultiFilter;
  } else {
    // If not, we're in a browser environment, so attach MakeMultiFilter to the window object
    window.MakeMultiFilter = MakeMultiFilter;
  }