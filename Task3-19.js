var data = [{
    name:"Hello",
    age:20,
     contact:913389
    },
    {
    name1:"Hello1",
    age1:21
    },
    {
    name2:"Hello2",
    age2:22
    }]
let a=0;
let arr=[]
data.map((e)=>{
    
    if(typeof e.age==="number"){
        a+=e.age
    }
if(typeof e.age1==="number"){
        a+=e.age1
    }
   if(typeof e.age2==="number"){
        a+=e.age2
    }
   if( e.name==="Hello"){
    arr.push(e.name)
   }
   if(e.name1==="Hello1"){
    arr.push(e.name1)
   }
   if (e.name2==="Hello2"){
    arr.push(e.name2)
   }
    }
)
arr.push(a)
console.log(arr)