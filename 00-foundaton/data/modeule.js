function myFunction(){
    console.log("Message from myFunction")
}

 const msg = "Hello World"

export let username = "My Username"

export{
    myFunction as func, msg
}

export default function defaultFunction(){
    console.log("This is default function")
}