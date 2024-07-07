const fs = require('fs')
const path = require('path')

// console.log(process.argv[2])
// const input = process.argv;

// if(input[2] === "add"){
//     fs.writeFileSync(input[3], input[4]);
// }else if(input[2] === "del"){
//     fs.unlinkSync(input[3]);
// }else{
//     console.log("Invalid command");
// }

//create files in folder
// const dirPath = path.join(__dirname, 'files');

// for(let i=1; i<5; i++){
//     fs.writeFileSync(`${dirPath}/file${i}.txt`, `This is simple file${i}`);
// }

//read file from directory
// fs.readdir(dirPath, (err, files)=>{
//     // console.log(files);
//     files.forEach((file)=>{
//       console.log(file); // file1.txt file2.txt file3.txt file4.txt           
//     })
// }) 

// crud operations
// 1. create file
// fs.writeFileSync(`${dirPath}/apple.txt`, "This apple.txt file");

// const filePath = `${dirPath}/apple.txt`;

// 2. read file
// const content = fs.readFileSync(filePath, {encoding: 'utf-8'});
// console.log(content);
// fs.readFile(filePath, 'utf-8', (err, file)=>{
//     console.log(file)
// });

// 3. append file
// fs.appendFile(filePath, " and appended data", (err)=>{
//     if(!err) console.log("appended data")
// })

// fs.appendFileSync(filePath, " and appende2 2 data")

// 4. Rename file
// fs.rename(filePath, `${dirPath}/mango.txt`, (err)=>{
//     if(!err) console.log("file rename successfully");
// });

// fs.renameSync(`${dirPath}/mango.txt`, `${dirPath}/apple.txt`);

// 5. delete file
// fs.unlink(filePath, (err)=>{
//     if(!err) console.log("file deleted");
// })

// fs.unlinkSync(filePath);