import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
    const child = spawn('node', [
        './files/script.js',
        ...args
    ])
    process.stdin.pipe(child.stdin)
    child.stdout.pipe(process.stdout)
    return child
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2', 'test']);
