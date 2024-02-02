'use strict';
// Define the TemplateProcessor class
function TemplateProcessor(template) {
    // Store the template in an instance variable
    this.template = template;
  }
  
  // Define the fillIn method
  TemplateProcessor.prototype.fillIn = function(dictionary) {
    // Make a copy of the template
    let filledTemplate = this.template;
  
    // Iterate over the keys of the dictionary
    for (const key in dictionary) {
      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      const regex = new RegExp(`{{${key}}}`, 'g');
      filledTemplate = filledTemplate.replace(regex, dictionary[key]);
    }
  }
  
    // Replace any remaining {{key}} patterns with an empty string
    filledTemplate = filledTemplate.replace(/{{\w+}}/g, '');
  
    // Return the filled-in template
    return filledTemplate;
  };

    if (typeof module !== 'undefined') {
      // If so, export the TemplateProcessor function
      module.exports = TemplateProcessor;
    } else {
      // If not, we're in a browser environment, so attach TemplateProcessor to the window object
      window.TemplateProcessor = TemplateProcessor;
    }