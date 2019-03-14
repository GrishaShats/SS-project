const replace = (n) => {
  const dec = n;
  const store = dec[0];
  dec[0] = dec[dec.length - 1];
  dec[dec.length - 1] = store;
  return +dec.join('');
};

const add = (n) => {
  let dec = n;
  dec = [...dec, 1];
  dec = [1, ...dec];
  return +dec.join('');
};


module.exports = { replace, add };
