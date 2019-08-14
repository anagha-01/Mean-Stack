module.exports.prime=(n)=>{
    var n
    for(let i=2;i<n;i++)
    {
      if(n%i==0)
      {
        console.log("Not")
        break
      }
      else{
        console.log("Prime")
      }
    }
}