import { promises as fs } from 'fs'
import { access, constants } from 'node:fs/promises';

const filePath = './files/fileToRemove.txt'
const errorMessage = 'FS operation failed'

const remove = async () => {
    try{
        await errorHandler(filePath)
        await fs.unlink(filePath)
    }catch(err){
        console.log(err)
    }
};

await remove();

async function errorHandler(filePath){
    const isExist = await access(filePath, constants.F_OK).then(() => true).catch(() => false);
    if(!isExist){
        throw new Error(errorMessage)
    }
}