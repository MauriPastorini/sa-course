const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_ENCRYPT;

exports.encrypt = async (data, options = {}) => {
    const token = await jwt.sign(data, secret, options);
    return token;
}

exports.decrypt = (token) => {
    const decoded = jwt.verify(token, secret);
    return decoded;
}