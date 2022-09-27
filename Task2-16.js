// function removeDuplicate(b) {
//     var arr1=[];
//     for(let i=0;i<b.length;i++)
//     arr1.push(parseInt(b[i]));
//     console.log(arr1);
//     var arr= [];
//     for (var i = 0; i < b.length; i++) 
//     if(arr.indexOf(arr1[i])===-1&&arr1[i]!=="")
//     arr.push(arr1[i]);
//     return arr
//     }
    
//     console.log(removeDuplicate(["2","3","4","2","3"]));

// function dup(b) 
// {
// for (i = 0; i < b.length; i++) 
// {
// let temp = true;
// for (j = i + 1; j < b.length; j++) 
// {
// if (b[i] == b[j]) 
// {
// temp = false;
// }
// }
// // if (temp) {
// //     d = parseInt(d + b[i]);
// // }
// if(temp)
// {
// c.push(parseInt(b[i]));
// }
// } 
// return c;
// // c.push(d)
// }
// var bdc = ["2", "3", "4", "2", "3"];
// var c = [];
// // var d = "";
// console.log(dup(bdc));

function dup(a) 
{
for (i = 0; i < a.length; i++) 
{
let b = true;
for (j = i + 1; j < a.length; j++) 
{
if (a[i] == a[j]) 
{
b = false;
}
}
// if (b) {
//     d = parseInt(d + a[i]);
// }
if(b)
{
c.push(parseInt(a[i]));
}
} 
return c;
// c.push(d)
}
var a = ["2", "3", "4", "2", "3"];
var c = [];
// var d = "";
console.log(dup(a));
    