import { Worker } from 'worker_threads';
import os from 'os';

const performCalculations = async () => {
    const coresCount = os.cpus().length
    const workerPromiseArr = []
    for(let i=0;i<coresCount;i++){
        workerPromiseArr.push(runWorker(i,10))
    }
    const workerPromiseArrData = await Promise.all(workerPromiseArr)
    console.log(workerPromiseArrData)
};

await performCalculations();

function runWorker(workerIndex, initialValue){
    return new Promise((res)=>{
        const worker = new Worker('./src/wt/worker.js')
        worker.postMessage(initialValue + workerIndex)
        worker.on('message', (result) => {
            res({ ...result});
          })
        worker.on('error', () => {
            res({ status: 'error', data: null});
        })
        worker.on('exit', (code) => {
            if (code !== 0) {
                res({ status: 'error', data: null});
            }
        })
    })
}