var EventEmitter=require('events')
var emitter=new EventEmitter() //object creation
emitter.on("doorOpen",(name)=>{    //on-->event listener
    console.log(name+" is waiting....!!")
})
emitter.on("doorOpen",(name)=>{
    console.log("Hii,"+name+" Please wait...")
})
emitter.emit("doorOpen","Anu")  
emitter.emit("doorOpen","Ammu")  

