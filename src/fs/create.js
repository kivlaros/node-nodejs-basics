import { promises as fs } from 'fs'
import { access, constants } from 'node:fs/promises';

const filePath = './src/fs/files/fresh.txt'
const errorMessage = 'FS operation failed'

const create = async () => {
    try{
        await errorHandler(filePath)
        await fs.writeFile(filePath,'I am fresh and young','utf8')
    }catch(err){
        console.log(err)
    }
};

await create();

async function errorHandler(filePath){
    const isExist = await access(filePath, constants.F_OK).then(() => true).catch(() => false);
    if(isExist){
        throw new Error(errorMessage)
    }
}