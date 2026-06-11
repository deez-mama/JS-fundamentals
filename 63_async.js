//async -> makes a function return a promise//

async function LoadedFile() {
    
    let fileLoaded = true;

    if(fileLoaded){
        return "File has loaded";
    }
    else{
        throw "File has NOT loaded";
    }
    // fileLoaded ? return "File has loaded" : throw "File is NOT loaded"; -> This does not work because, return and throw are statements
    // Ternary operators only choose between expressions so the line is a syntax error
}



LoadedFile().then((value)=> console.log(value))
        .catch((error)=> console.log(error));
