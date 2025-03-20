
fs.readdir('test-dir',(err,data)=>{
    if(err)throw err
    data.forEach(item => {
        fs.stat(`test-dir/${item}`,(err,sts)=>{
            if(err)throw err
            if(sts.isDirectory())
            {
                if(!fs.existsSync("NewFolder"))
                fs.mkdir('NewFolder',{recursive:true})
            }
            else{
                if(!fs.existsSync('NewFolder')){fs.mkdirSync('NewFolder')}
                fs.copyFile(`test-dir/${item}`,`NewFolder/${item}`,(err)=>{
                    if(err)throw err
                })
            }
        })
    });
    console.log("backup directory completed....");
});