const arr:number[] = [1,2,3,4,5,6];
let num = 0;
for(let total of arr){
    num+=total;
}
let a = num / arr.length;
console.log(`Điểm trung bình: ${a}`);
