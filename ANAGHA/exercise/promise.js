var prom=new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve('Promise is created and consumed')
    },200);
});
prom.then(value=>{
    console.log(value)
});