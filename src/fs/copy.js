import { promises as fs } from 'fs';
import { access, constants } from 'node:fs/promises';

const errorMessage = 'FS operation failed'

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
    const isFilesExist = await access(filesPath, constants.F_OK).then(() => true).catch(() => false);
    const isCopyExist = await access(copyPath, constants.F_OK).then(() => true).catch(() => false);

    if(!isFilesExist||isCopyExist){
        throw new Error(errorMessage)
    }
    
}
