const randomProfile = require('random-profile-generator');

function generateARGVRandomAges() {
  const amount = Number(process.argv[2]);
  if (Number.isNaN(amount)) throw new Error('argv must be a number');

  const ages = Array.from(new Array(amount), () => randomProfile.age());
  return ages;
}

module.exports = generateARGVRandomAges;
