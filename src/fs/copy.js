import { promises as fs } from 'fs';

const copy = async () => {
    try{
        const filesFolderStats = await fs.stat('files')
        const filesCopyFolderStats = await fs.stat('files_copy')
        if(!filesFolderStats.isDirectory()||filesCopyFolderStats.isDirectory()){
            console.log(filesFolderStats.isDirectory(),filesCopyFolderStats.isDirectory())
            throw new Error('FS operation failed')
        }
        await fs.mkdir('files_copy');
        await fs.cp('files', 'files_copy',{ recursive: true });
    }catch(err){
     console.log(err)
    }
};

await copy();
