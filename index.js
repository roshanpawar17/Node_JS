const fs = require('fs')

console.log(process.argv[2])
const input = process.argv;

if(input[2] === "add"){
    fs.writeFileSync(input[3], input[4]);
}else if(input[2] === "del"){
    fs.unlinkSync(input[3]);
}else{
    console.log("Invalid command");
}