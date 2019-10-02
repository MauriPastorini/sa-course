const randomInt = (max = 100) => Math.ceil(Math.random() * max);

const extractIds = xs => xs.map(({
  id
}) => id);

module.exports = {
  randomInt,
  extractIds
};