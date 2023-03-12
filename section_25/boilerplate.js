const fs = require('fs'); 
const folderName = process.argv[2] || 'project'

// fs.mkdir('apple', { recursive: true }, (err) => {
//     console.log("IN THE CALLBACK")
//     if (err) throw err;
//   });
try{
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, "")
    fs.writeFileSync(`${folderName}/app.js`,"")
    fs.writeFileSync(`${folderName}/style.css`,"")
}catch (e){
    console.log("something wrong")
    console.log(e)
}