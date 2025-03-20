//requiring fs module
const { log } = require('console');
const fs= require('fs')


//async file read
// fs.readFile('vishal.txt','utf-8',(err,data)=>{
//     if(err)throw err;
//     console.log(data);
// })


//sync file read
// const sahil=fs.readFileSync('vishal.txt','utf-8')
// console.log(sahil)


// write file in fs module
// sync write method


// fs.writeFileSync("Name.txt","Hello this Is sync Write MEthod");
// console.log("Done")



// async write method

// fs.writeFile("Name2.txt","Hello  this Is Async Write MEthod",(err)=>{
//     if(err) throw err;
// });
// console.log("Done, name 2");




// update file in fs module
//  sync update method=> appendfilesync
// fs.appendFileSync("Name2.txt","This is new Data using symc");
// console.log("Done Updated sync")

//  async update method

// fs.appendFile("Name2.txt","This is Our Newest Data Using Async",(err)=>{
//     if(err)throw err;
//     console.log("Done Updated async")
// })

// delete file in fs module


//  sync Delete method=>unlinksync
// fs.unlinkSync("Name2.txt");
// console.log("Deleted with Sync Method")


//  async Delete method=>unlink

// fs.unlink("Name.txt",(err)=>{
//     if(err)throw err;
//     console.log("Deleted with async");
// })




// Directory => read,write,update,delete


// create a directory=>


    // sync method 

//     fs.mkdirSync("New Folder");
// console.log("New Folder Created");

//async method=>




// So when we have to basically read one directory then its purpose will be show all files inside it .


// read directory
// fs.readdir("New Folder",(err,files)=>{if(err)throw err;
//     console.log(files);
// })



// delete a directory

// fs.rmdir("New Folder",(err)=>{
//     if(err)throw err;
//     console.log("Folder Deleted");
// })

// rename a file
// fs.rename("vishal.txt","Monty.txt",(err)=>{
//     if(err)throw err;
//     console.log("succes");
// })

// check file related stats
// fs.stat("Monty.txt",(err,stats)=>{
//         if(err)throw err;
//         console.log(stats)
//     })'



