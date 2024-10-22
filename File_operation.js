const fs = require("fs").promises;

const path = require("path")


const fileOps = async()=>{
    try{
        await fs.writeFile(path.join(__dirname,'text.txt'),"Hello !")
        console.log('File written successfully');
    }
    catch(err){
        console.log(err)
    }
}

fileOps()



//==================================================================================================//


const fs = require('fs');
const path = require('path');

const rf = function() {
    fs.readFile(path.join(__dirname, 'test.txt'), 'utf-8', (err, data) => {
        if (err) {
            console.log('Error reading file:', err);
        } else {
            wf(data); // Pass the data read to the write function
        }
    });
};

const wf = function(content) {
    fs.writeFile(path.join(__dirname, 'best.txt'), content, (err) => {
        if (err) {
            console.log('Error writing file:', err);
        } else {
            console.log('File written successfully');
        }
    });
};

rf(); // Start by reading the file



const fs = require('fs').promises
const path= require('path')


let wr = async(s)=>{
    try{
        fs.writeFile(path.join(__dirname,'text.txt'),s)
        console.log("File Written")
    }
    catch(err){
        console.log(err)
    }
    finally{
        console.log("Finished")
    }
}


wr("03.02----")