'use strict';

class TemplateProcessor {
    constructor(template) {
        this.template = template;
    }

    fillIn(dictionary) {
        let renderedString = this.template;

        for (const [key, value] of Object.entries(dictionary)) {
            renderedString = renderedString.replaceAll(`{{${key}}}`, value);
        }

        return renderedString.replaceAll(/{{.*}}/g, '');
    }
}

// Example usage:
const template = 'My favorite month is {{month}} but not the day {{day}} or the year {{year}}';
const dateTemplate = new TemplateProcessor(template);

const dictionary = { month: 'July', day: '1', year: '2016' };
const str = dateTemplate.fillIn(dictionary);

console.log(str);
