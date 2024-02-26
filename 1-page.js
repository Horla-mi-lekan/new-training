const os = require("os")
console.log(os);

const currentOs = {
    name: os.type(),
    release: os.release(),
    freemem: os.freemem(),
    totalmem: os.totalmem()
}
console.log(currentOs);

const user = os.userInfo();
console.log(user)