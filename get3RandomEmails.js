const randomProfile = require('random-profile-generator');

function get3RandomEmails() {
  return [
    randomProfile.email(),
    randomProfile.email(),
    randomProfile.email(),
  ];
}

module.exports = get3RandomEmails;
