import { promises as fs } from 'fs'
import { access, constants } from 'node:fs/promises';

const filePath = './files/fileToRead.txt'
const errorMessage = 'FS operation failed'

const read = async () => {
    try{
        await errorHandler(filePath)
        const content = await fs.readFile(filePath, 'utf8');
        console.log(content)
    }catch(err){
        console.log(err)
    }
};

await read();

async function errorHandler(filePath){
    const isExist = await access(filePath, constants.F_OK).then(() => true).catch(() => false);
    if(!isExist){
        throw new Error(errorMessage)
    }
}