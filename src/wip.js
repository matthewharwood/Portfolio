const Base64 = require('js-base64').Base64;

console.log(JSON.parse(JSON.stringify(Base64.decode("e30="))));