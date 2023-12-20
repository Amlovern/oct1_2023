const bcrypt = require('bcryptjs');

const password = 'password123';

const hashPass = password => {
    const hash = bcrypt.hashSync(password, 13);
    return hash;
};

const hashedPass = hashPass(password);
console.log(hashedPass)
// $2a$12$jy4NGvstJZ6/N1BzFaXi4.k0zKtm4TQNNyIcnR4ri55.SuITql96O
//  \_/\_/\_____________________/\_____________________________/
//  /   |         |                           |
//algo cost     salt                        hash

const testPass = (password, hash) => {
    const isPass = bcrypt.compareSync(password + 'nope', hash);
    return isPass;
}

const passTest = testPass(password, hashedPass);
console.log(passTest);