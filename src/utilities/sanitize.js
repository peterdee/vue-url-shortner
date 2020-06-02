/**
 * Sanitize inputs (prevent NoSQL injection)
 * @param {*} data - input data
 * @returns {*}
 */
function sanitize(data) {
  if (data instanceof Object) {
    for (var key in data) {
      if (/^\$/.test(key)) {
        delete data[key];
      } else {
        sanitize(data[key]);
      }
    }
  }
  return data;
}

export default sanitize;
