import { promises as fs } from 'fs'
import { access, constants } from 'node:fs/promises';

const folderPath = './src/fs/files'
const errorMessage = 'FS operation failed'

const list = async () => {
    try{
        await errorHandler(folderPath)
        const filesList =  await fs.readdir(folderPath)
        console.log(filesList)
    }catch(err){
        console.log(err)
    }
};

await list();

async function errorHandler(folderPath){
    const isExist = await access(folderPath, constants.F_OK).then(() => true).catch(() => false);
    if(!isExist){
        throw new Error(errorMessage)
    }
}