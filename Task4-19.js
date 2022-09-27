var data1 = {
    name: "Hello",
    data2: [{
        name: "Hello1",
        age1:21
    },{
        name1: [{
            name2:"Hello2",
            age2: 22
        }]
    }],
    age:20
}
let arr=[];
  let sum=0;
  if(data1.name)
     {
     arr.push(data1.name);
     }
  if(data1.age)
      {
      sum+=data1.age;
      }
    data1.data2.map(e=>
        {
      if(e.name)
          {
          arr.push(e.name);
          }
      if(e.age1)
          {
          sum+=e.age1;
          }
  })
  data1.data2[1].name1.map(el=>
       {
      if(el.name2)
         {
      arr.push(el.name2)
         }
      if(el.age2)
          {
          sum+=el.age2
          }
      })
  arr.push(sum);
  console.log(arr);