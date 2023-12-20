const jwt = require('jsonwebtoken');
require('dotenv').config();

const payload = {
    firstName: 'Anthony',
    lastName: 'Lovern',
    birthDate: '07-31-1992'
};

const secretKey = process.env.secretKey;

const createToken = () => {
    const token = jwt.sign(payload, secretKey);
    return token;
};

const token = createToken();
console.log(token)

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJBbnRob255IiwibGFzdE5hbWUiOiJMb3Zlcm4iLCJiaXJ0aERhdGUiOiIwNy0zMS0xOTkyIiwiaWF0IjoxNzAzMDk2NDc4fQ.0H21crcrT8YtfluZk1Kneltpwjno60VtO7KGLfKpYk8

const verifyToken = token => {
    const verified = jwt.verify(token + 'nope', secretKey);
    return verified;
};

const verifiedToken = verifyToken(token);
console.log(verifiedToken)