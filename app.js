// const randomProfile = require('random-profile-generator');

const fs = require('fs');
const generateARGVRandomAges = require('./generateARGVRandomAges');
const get3RandomEmails = require('./get3RandomEmails');
const getPhones = require('./getPhones');

// const profile = randomProfile.profile();
// console.log(profile);

// const randomName = randomProfile.name('male');
// console.log(randomName);

// console.log('Hello, world!');
// const a = 3;

// const emails = get3RandomEmails();
// console.log(emails);

// const phones = getPhones('19');
// console.log(phones);

// console.log(process.argv[2]);

// const ages = generateARGVRandomAges();
// console.log(generateARGVRandomAges());

const phones = getPhones(14);

fs.writeFileSync('./res.txt', phones.join('\n'), 'utf8');

// const fileData = fs.readFileSync('./res.txt', 'utf8');
// console.log(fileData);
