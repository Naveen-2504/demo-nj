// FS Module 

const { readFileSync, writeFileSync } = require('fs')
console.log("start");
const first = readFileSync("./content/first.txt", "utf8")
const sec = readFileSync("./content/second.txt", "utf8")
// console.log(first, sec);

writeFileSync('./content/result-sync.txt', ` ${first}, ${sec} i am new coming 
`,{flag: "a"})

console.log("done");
console.log("next");
