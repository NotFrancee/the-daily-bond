interface Element {
  nodeType: string;
  data: any;
  value: string | number | boolean;
}

/**
 * Returns a valid selector for the headings.
 * @constructor
 * @param {Element[]} elementsArr - The array of elements
 */
function generateId(elementsArr: Element[]) {
  const id = elementsArr.reduce((result, element) => {
    if (typeof element.value !== 'string') return result;

    let string = element.value;

    const specialCharsExp = /([^A-z ])/g;
    const spacesExp = / /g;
    string = string.toLowerCase();
    string = string.replace(specialCharsExp, '');
    string = string.trim();
    string = string.replace(spacesExp, '-');

    console.log('GENERATED ID: ', result + string);
    return result + string;
  }, '');

  return id;
}

export default generateId;
