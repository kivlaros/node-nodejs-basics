import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';

const decompress = async () => {
    const readStream = createReadStream('./files/archive.gz');
    const writeStream = createWriteStream('./files/fileToCompress.txt');
    const gunzip = createGunzip();

    readStream
    .pipe(gunzip)
    .pipe(writeStream)
    .on('finish', () => console.log('Decompression complete!'))
    .on('error', (error) => {
      console.error('Decompression error:', error);
      process.exit(1);
    })

};

await decompress();