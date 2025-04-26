import { promises as fs } from 'fs';
import { access, constants } from 'node:fs/promises';

const copy = async () => {
    try{
        await errorHandler('files', 'files_copy')
        await fs.mkdir('files_copy');
        await fs.cp('files', 'files_copy',{ recursive: true });
    }catch(err){
     console.log(err)
    }
};

await copy();

async function errorHandler(filesPath,copyPath) {
    let isCopyPathExist = false
    try {
        await access(filesPath, constants.R_OK | constants.W_OK);
    } catch{
        throw new Error('FS operation failed')
    }
    try {
        await access(copyPath, constants.R_OK | constants.W_OK);
        isCopyPathExist = true
    } catch{
    }
    if(isCopyPathExist){
        throw new Error('FS operation failed')
    }
    
}
