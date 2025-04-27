const parseArgs = () => {
    const args = process.argv
    console.log(args)
    const argsPropArray = args.reduce((acc,elem,i,arr)=>{
        if(elem.startsWith('--')){
            const propElem = [elem.slice(2),arr[i+1]].join(' is ')
            acc.push(propElem)
        }
        return acc
    },[]).join(', ')
    console.log(argsPropArray)
};

parseArgs();