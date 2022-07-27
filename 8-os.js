const os = require("os");
//user info
const user = os.userInfo();

// console.log(user);

// console.log(`system uptime is ${os.uptime()}`);

const currOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(), 
};

console.log(currOs);

