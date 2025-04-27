import { createReadStream } from 'fs';
import { createHash } from 'crypto';

const calculateHash = async () => {
    try {
        const readStream = createReadStream('./files/fileToCalculateHashFor.txt');
        const hash = createHash('sha256');
    
        readStream
          .on('data', (chunk) => hash.update(chunk))
          .on('end', () => {
            const hexHash = hash.digest('hex');
            console.log(hexHash);
          })
        } catch (err) {
            console.log(err)
        }
    }
await calculateHash();