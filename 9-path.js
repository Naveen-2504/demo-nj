//path Module
const path = require("path")
// display a path 
console.log(path.sep);

//join a the path
const filePath = path.join("/content", "subfolder", "test.txt")
console.log(filePath);

// find the file in path
const base = path.basename(filePath)
console.log(base);
//merge your local path and your file path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt")
console.log(absolute);