import { createWriteStream } from 'fs';

const write = async () => {
    const writeStream = createWriteStream('./files/fileToWrite.txt')
    process.stdin.pipe(writeStream);
    writeStream.on('error', (error) => {
        console.error(`Write error: ${error.message}`);
        process.exit(1);
      })
};

await write();