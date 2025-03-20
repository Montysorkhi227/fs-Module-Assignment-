// requiring fs module
const { log } = require('console');
const fs= require('fs')

// const path = require('path');

// 1.  Write a Node.js script to read a file named "input.txt" asynchronously and print its
// contents to the console.
// 2. Modify the script to handle errors gracefully when reading the file "input.txt"
// asynchronously.
// 3. Create a Node.js script to write "Hello, World!" to a new file named "output.txt" using
// synchronous methods.
// 4. How would you update "output.txt" to append "Goodbye, World!" at the end of the file
// using asynchronous methods?
// 5. Write a function in Node.js to delete a file named "delete-me.txt" asynchronously and log
// a success message.
// 6. Develop a script that creates a directory called "test-dir" synchronously, and logs a
// confirmation message.
// 7. Write a script to read and print all file names inside a directory named "test-dir" using
// asynchronous methods.
// 8. How would you modify a script to handle errors when reading a directory that does not
// exist?
// 9. Create a script to rename a file from "oldname.txt" to "newname.txt" asynchronously and
// handle potential errors.
// 10. Write a script to get and print the file statistics for "example.txt" using asynchronous
// methods.
// 11. Develop a script that checks if a file named "config.txt" exists using fs.existsSync
// and logs the result.
// 12. Write a Node.js function that reads a JSON file named "data.json" asynchronously and
// parses the JSON object.
// 13. Create a script to write an array of objects to a file named "data.json" in a pretty JSON
// format using synchronous methods.
// 14. How would you append multiple lines of text to a file "log.txt" asynchronously without
// overwriting the existing content?
// 15. Write a script to delete a directory named "old-dir" asynchronously, ensuring that the
// directory is empty.
// 16. Develop a script that lists all files in a directory and their file sizes using asynchronous
// methods.
// 17. Write a Node.js script to copy the contents of "source.txt" to "destination.txt" using the fs
// module.
// 18. Create a script to monitor changes to a file "config.txt" and log the change time to the
// console using fs.watch.
// 19 Develop a script that recursively deletes all files in a directory using asynchronous fs
// methods.
// 20. Write a script to create a backup of a directory by copying all its files and subdirectories
// to a new location.


 // 1.  Write a Node.js script to read a file named "input.txt" asynchronously and print its
// contents to the console.

//  fs.readFile("Monty.txt","utf-8",(err,data)=>{
//     if(err)throw err;
//     console.log(data);
//  })

 // 2. Modify the script to handle errors gracefully when reading the file "input.txt"
// asynchronously.

// fs.appendFile("Monty.txt",(err,)=>{
//     if(err)throw err;
//     console.log("updated");
//  })

 // 3.  Create a Node.js script to write "Hello, World!" to a new file named "output.txt" using
// synchronous methods.
// const file=fs.writeFileSync("MMMM.txt","Hello World!");
// console.log(file);

 // 4. How would you update "output.txt" to append "Goodbye, World!" at the end of the file
// using asynchronous methods?

// fs.appendFile("output.txt", "\nGoodbye, World!", (err) => {
//     if (err) throw err;
//     console.log("Text appended to output.txt successfully.");
// })


 // 5.Write a function in Node.js to delete a file named "delete-me.txt" asynchronously and log
// a success message.

// fs.unlink("output.txt", (err) => {
//     if (err) throw err
//   console.log("File output.txt deleted successfully.");
// })

 // 6.  Develop a script that creates a directory called "test-dir" synchronously, and logs a
// confirmation message.
//  fs.mkdirSync("test-dir");
//  console.log("Directory test-dir created successfully.");

 // 7.  Write a script to read and print all file names inside a directory named "test-dir" using
// asynchronous methods.
//  fs.readdir("test-dir", (err, files) => {
//     if (err) throw err;
//     console.log("Files in test-dir:", files);
//  })


// 8. How would you modify a script to handle errors when reading a directory that does not
// exist?

// fs.readdir("non-existent-dir", (err) => {
//     if (err) console.error("Error reading non-existent-dir:", err.message);
// })


 // 9. Create a script to rename a file from "oldname.txt" to "newname.txt" asynchronously and
// handle potential errors.
//  const filePath = path.join( './/newname.txt');
//  const newfilePath = path.join( './test-dir/NewName.txt');
//  fs.rename(filePath,newfilePath , (err) => {
//     if (err) throw err;
//     console.log("File renamed from hello.txt to newname.txt successfully.");
//  })

// 10.  Write a script to get and print the file statistics for "example.txt" using asynchronous
// methods.
// Define the path to the hello.txt file
// const filePath = path.join( './test-dir/hello.txt');

// Get file stats
// fs.stat(filePath, (err, stats) => {
//     if (err) throw err;
//     console.log("File stats for hello.txt:", stats);
// });

// 11.  Develop a script that checks if a file named "config.txt" exists using fs.existsSync
// and logs the result.

// if(fs.existsSync('config.txt')) {
//     console.log('H Ure A Teri File ');
// } else {
//     console.log('Bhai Va to Tne Bnai A koni Ya Fer Tne Delete Krdi ');
// }


// 12. Write a Node.js function that reads a JSON file named "data.json" asynchronously and
// parses the JSON object.

// fs.readFile('data.json','utf8',(err,data)=>{
//     if(err) throw err;
// const jsonDatas = JSON.parse(data);
//     console.log(jsonDatas);
// })


// 13. Create a script to write an array of objects to a file named "data.json" in a pretty JSON
// format using synchronous methods.


// const data = [
//     {name:'Vishal'},
//     {age:19},
//     {city:'Hisar'}
// ]
// const jsonData = JSON.stringify(data,null,2);

// fs.writeFileSync('data.json',jsonData);

// console.log('json format done..');


// 14. How would you append multiple lines of text to a file "log.txt" asynchronously without
// overwriting the existing content?

// fs.appendFile('log.txt','\nFirst line\nSecond line\nThird line',(err)=>{
//     if(err)throw err;
//     console.log("multiples data added...");
// })


// 15. Write a script to delete a directory named "test-dir" asynchronously, ensuring that the
// directory is empty

// fs.readdir('test-dir',(err,data)=>{
//     if(err)throw err;
//     console.log('files to delted are : ',data);

// for(let i=0;i<data.length;i++){
//     fs.unlink(`test-dir/${data[i]}`,(err)=>{
//         if(err)throw err;
//         console.log(`${files[i]} deleted...`);
//     })
// }
// console.log('all in directory files deleted...');

// fs.rmdir('test-dir',(err)=>{
//     if(err)throw err;
//     console.log('directory also deleted...');
// })
// }) 


// 16. Develop a script that lists all files in a directory and their file sizes using asynchronous
// methods.


// fs.readdir('test-dir',(err,data)=>{
//     if(err)throw err;

//     for(let i = 0 ; i<data.length;i++){

//         fs.stat(`test-dir/${data[i]}`,(err,stats)=>{
//             if(err)throw err;
//             if(stats.isFile())
//                 console.log(`${data[i]} - ${stats.size} bytes`);
//         })
//     }
// })


// 17. Write a Node.js script to copy the contents of "source.txt" to "destination.txt" using the fs
// module.

// fs.readFile('./test-dir/hello.txt',(err,data)=>{
//     if(err)throw err;

//     fs.appendFile('./test-dir/hello2.txt',data,(err)=>{
//         if(err)throw err;
//         console.log('context copied from one to another file...');
//     })
// })



// 18. Create a script to monitor changes to a file "config.txt" and log the change time to the
// console using fs.watch.

// fs.watch('./test-dir/hello.txt',(time)=>{
//     if(time=='change')
//     {
//         console.log("change of time is : ",new Date().toLocaleString());    
//     }
// })
// fs.appendFileSync('./test-dir/hello.txt','\nnew world')



// 19. Develop a script that recursively deletes all files in a directory using asynchronous fs
// methods.


// fs.readdir('test-dir',(err,data)=>{
//     if(err)throw err;

//     for(let i = 0; i<data.length;i++){
//         fs.unlink(`test-dir/${data[i]}`,(err)=>{
//             if(err)throw err;
//         })
//     }
//     console.log('file deleted in a directory....');
// })


// 20. Write a script to create a backup of a directory by copying all its files and subdirectories
// to a new location.


// fs.readdir('test-dir',(err,data)=>{
//     if(err)throw err
//     data.forEach(item => {
//         fs.stat(`test-dir/${item}`,(err,sts)=>{
//             if(err)throw err
//             if(sts.isDirectory())
//             {
//                 if(!fs.existsSync("NewFolder"))
//                 fs.mkdir('NewFolder',{recursive:true})
//             }
//             else{
//                 if(!fs.existsSync('NewFolder')){fs.mkdirSync('NewFolder')}
//                 fs.copyFile(`test-dir/${item}`,`NewFolder/${item}`,(err)=>{
//                     if(err)throw err
//                 })
//             }
//         })
//     });
//     console.log("backup directory completed....");
// });
