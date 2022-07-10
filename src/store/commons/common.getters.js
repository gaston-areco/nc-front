export default {
  getProp: () => (keypath, object) => {
    keypath = keypath.split('.');
    return keypath.reduce((obj, key) => (obj && obj[key]) ? obj[key] : null, object);
  }
};
