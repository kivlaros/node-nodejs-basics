import { Transform } from 'stream';

const transform = async () => {
    class ReverseTransform extends Transform {
        _transform(chunk, encoding, callback) {
            const reverseText = chunk.toString()
                .split('')
                .reverse()
                .join('')
                .trim()
            this.push(reverseText + '\n');
            callback();
        }
    }

    const transform = new ReverseTransform()

    process.stdin.pipe(transform).pipe(process.stdout)
};

await transform();