const { readFile } = require("fs");

const fs = require("fs").promises

// read data from file
// check id mail exist 
// id don't add email and userss
// rewrite file return message

const addUser = async(mail,password)=>{
    const fileContent = await fs.readFile("users.json","utf-8")

    const fileData = JSON.parse(fileContent)

    if(fileData.hasOwnProperty(mail)){
      
        return (false);
    }

    fileData[mail] = password;

    const updatedFileData = JSON.stringify(fileData,null,4);
    await fs.writeFile("users.json",updatedFileData)
    return true;
    
}

const Users = async()=>{
        const data = await fs.readFile("users.json","utf-8")
        return JSON.parse(data)
}

module.exports  = {addUser,Users}
// addUser("uniquegbw09@gmail.com","301183")