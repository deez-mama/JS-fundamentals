for (let i= 1; i <=10; i++){
    if(i==13){
        continue; //skips 13 and continues with the rest of the loop 
    }
    if(i==15){
        break; //skips 15 and everything after it i.e only runs loop till 14
    }
    console.log(i);

}