import { promises as fs } from 'fs'
import { access, constants } from 'node:fs/promises';

const filePath = './files/wrongFilename.txt'
const newFilePath = './files/properFilename.md'
const errorMessage = 'FS operation failed'

const rename = async () => {
    try{
        await errorHandler(filePath, newFilePath)
        await fs.rename(filePath,newFilePath)
    }catch(err){
        console.log(err)
    }
};

await rename();

async function errorHandler(filePath,newFilePath){
    const isWrongExist = await access(filePath, constants.F_OK).then(() => true).catch(() => false);
    const isMDExist = await access(newFilePath, constants.F_OK).then(() => true).catch(() => false);
    if(!isWrongExist||isMDExist){
        throw new Error(errorMessage)
    }
}