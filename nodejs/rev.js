module.export.rev=(a)=>
{
    var n
    var r=0
    var rem
    while(n>0)
    {
        rem=n%10
        rev=rev*10+rem
        n=n/10
    }
    console.log("Reverse is"+r)
}

