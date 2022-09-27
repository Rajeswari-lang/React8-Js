let arr = ["1", "5", "8", "10"];
let c=0;
let d=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]-i!=c){
        while(c<arr[i]-i){
            d.push(c+i);
            c++;
        }
    }
}
console.log(d);