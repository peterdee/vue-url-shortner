/**
 * Validate a URL
 * @param {string} string - URL address to validate
 * @returns {boolean}
 */
export default (string = '') => {
  // check for the protocol first
  const protocols = ['http', 'https'];
  const [protocol] = string.split('://');
  if (!protocols.includes(protocol)) return false;

  // check the rest of the URL
  const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(string);
};
