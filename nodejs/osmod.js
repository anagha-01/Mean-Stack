//inbuilt modules
const myos=require('os')
var userdata=myos.userInfo() //function to get userinfo(inbuilt)
console.log(userdata.username)
var platform=myos.platform()  //to get the platform(windows,linux,mobile)
console.log(userdata.username+" Uses "+platform)