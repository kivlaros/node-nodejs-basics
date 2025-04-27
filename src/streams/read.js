import { createReadStream } from 'fs';

const read = async () => {
    const readStream = createReadStream('./files/fileToRead.txt', 'utf8');
    readStream.pipe(process.stdout);
    readStream.on('error', (error) => {
        console.error(`Read error: ${error.message}`);
        process.exit(1);
      });
};

await read();