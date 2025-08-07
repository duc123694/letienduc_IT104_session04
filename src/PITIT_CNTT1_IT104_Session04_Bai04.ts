const p =(handleUnionType : number | string) =>{
    if(typeof handleUnionType === "string"){
        console.log(handleUnionType.length);
    }else{
    const result = handleUnionType % 2 ?"lẻ":"chẵn"
    console.log(`${handleUnionType} la so ${result}`);
    }
}
p(10);