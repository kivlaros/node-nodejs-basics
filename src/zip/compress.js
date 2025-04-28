import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

const compress = async () => {
    const readStream = createReadStream('./files/fileToCompress.txt');
    const writeStream = createWriteStream('./files/archive.gz');
    const gzip = createGzip();

    readStream
    .pipe(gzip)
    .pipe(writeStream)
    .on('finish', () => console.log('Compression complete!'))
    .on('error', (error) => {
      console.error('Compression error:', error);
      process.exit(1);
    });


};

await compress();