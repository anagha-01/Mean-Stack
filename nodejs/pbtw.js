module.exports.btw=(f,l)=>
{
    var n
    var i
    var l
    var flag
    while(f<l)
    {
        flag=0
        for(i=2;i<=f/2;++i){
            if(f%i==0)
            {
                flag=1
                break
            }
        }
        if(flag==0)
        {
        console.log(f)
    }
    ++f
    }
    return 0
}