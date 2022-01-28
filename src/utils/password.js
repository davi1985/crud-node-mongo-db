const bcrypt = require('bcrypt');

async function crypto(pwd) {
  const salt = await bcrypt.genSalt();

  const pass = await bcrypt.hash(pwd, salt);

  return pass;
}

module.exports = {
  crypto,
};
