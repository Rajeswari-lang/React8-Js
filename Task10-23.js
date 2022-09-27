let arr=[
    {
      "orgnization": "964518810554",
      "Jun-2022": "1569.4772 GB",
      "May-2022": "585.4595 GB",
      "Apr-2022": "43.5892 GB",
      "Mar-2022": "656.1891 GB",
      "Feb-2022": "110.8195 GB"
    },
    {
      "orgnization": "964533096762",
      "Jun-2022": "1193.3368 GB",
      "May-2022": "1502.3575 GB",
      "Apr-2022": "1554.5773 GB",
      "Mar-2022": "1510.9668 GB",
      "Feb-2022": "1666.8593 GB"
    },
    {
      "orgnization": "969860549670",
      "Jun-2022": "1.33 GB",
      "May-2022": "0.7833 GB",
      "Apr-2022": "1.0072 GB",
      "Mar-2022": "0.8562 GB",
      "Feb-2022": "NA"
    },


let entries=Object.entries(arr);
let b=[];
arr.map((e)=>{
    console.log(e)
    for(value in e){
        if(e[value].includes="GB"){
            //  console.log(e[value]);
            let d=e[value].replace("GB",'')
            b.push(d)
             console.log(b)
        }
    }
})