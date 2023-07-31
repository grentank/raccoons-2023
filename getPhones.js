const randomProfile = require('random-profile-generator');

function getPhones(amount) {
//   randomProfile.phone();
//   const phonesArr = new Array(amount).fill(randomProfile.phone());
//   return phonesArr;
  if (!Number.isInteger(amount)) {
    throw new Error('Amount must be an integer');
  }
  const phonesArr = [];
  for (let index = 0; index < amount; index += 1) {
    const randomPhone = randomProfile.phone();
    const rusPhone = `+7 ${randomPhone}`;
    // phonesArr.push(randomPhone);
    phonesArr.unshift(rusPhone);
  }
  return phonesArr;
}

module.exports = getPhones;
