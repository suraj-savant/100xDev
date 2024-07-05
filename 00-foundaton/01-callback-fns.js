
fs = require("fs")
function readDataFile(path, onDone){
    fs.readFile(path,"utf-8", function (err, data){
        if (err) {
            console.log("error in reading file")
            return "";
        }
        onDone(data);
        return data;
    })

}

function onReadDone(data){
    console.log(data);
    console.log("Done!")
}

data = readDataFile("./data/sample.txt", onReadDone)

// // Callback function

// function calculate(num1, num2, operation){
//     return operation(num1, num2)
// }

// let sum = calculate(10, 20, (a, b) => a+b)
// console.log(sum)