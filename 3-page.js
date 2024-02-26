const file = require("path");
console.log(file);

const filepath = file.join("/content", "subfolder", "text.txt");
console.log(filepath)

const base = file.basename(filepath);
console.log(base)

const resolve = file.resolve(__dirname, "./content", "subfolder", "text.txt");
console.log(resolve)