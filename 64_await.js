//await -> makes an async function wait for a promise
//         It has to be withing an async function to work

async function LoadedFile() {
    
    let fileLoaded = true;

    if(fileLoaded){
        return "File has loaded";
    }
    else{
        throw "File has NOT loaded";
    }
}

async function startprocess() {
    
    try{
        let message = await LoadedFile();
        console.log(message);
    }
    
    catch(error){
        console.log(error);
    }
    
}

startprocess();


//We dont have to use .then and .catch if we use await
//LoadedFile().then((value)=> console.log(value))
//        .catch((error)=> console.log(error));
