// Fetch using async/await

async function fetchData(){
    let res = await fetch("https://jsonplaceholder.typicode.com/users")
    if(!res.ok){
        throw Error("Error in fetch")
    }
    let data = await res.json()
    console.log(data)
}

fetchData()


// Fetch data from JSONPlaceholder API
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((res)=>{
    if(res.status == 200){
        return res.json()
    }
  })
  .then((data)=>{
    console.log(data)
  })

// function myPromise(data, timeout){     
//             return new Promise(function (resolve, reject){
//                     setTimeout(()=>console.log(data), timeout)
//             })

// }

// // myPromise("Promise1", 3000).then((data)=> console.log(data))
// // myPromise("Promise2", 1000).then((data)=> console.log(data))

// async function callMe1(){
//     let data = await myPromise("Promise1", 4000)
//     return data
// }

// async function callMe2(){
//     let data = await myPromise("Promise2", 2000)
//     return data
// }

// callMe1()
// callMe2()



// function myPromise(isRejected = false) {
//     return new Promise(function (resolve, reject) {
//       if (isRejected) {
//         console.log("Responding for reject");
//         reject("Promise Rejected");
//       } else {
//         console.log("Repsonding for resolve");
//         resolve("Hello there! Promise is Resolved");
//       }
//     });
//   }
  
//   let data;
//   data = myPromise(true).then((data) => console.log(data))
//   .catch((err) => console.log(err));
  
//   data = myPromise().then((data) => console.log(data))
//   .catch((err) => console.log(err));

  

// function callme(){
//     console.log("Hi there!")
// }

// setTimeout(callme, 2000)

// console.log("End of program")