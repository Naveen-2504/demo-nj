const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const firsts = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const sec = result;
    writeFile(
      "./content/result-async.txt",
      ` ${firsts}, ${sec} i am new add
    `,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        // console.log(result);
        console.log("done");
      }
    );
  });
});


console.log("end");